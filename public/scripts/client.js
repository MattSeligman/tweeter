/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

$(() => {

    const tweetsContainer = 'body > main';
    const tweetForm = 'section.new-tweet form';
    const tweetButton = 'section.new-tweet form button';
    const textAreaInput = 'textarea#tweet-text';
    let tweets = null;
    

    var p = $( textAreaInput )
    var position = p.position();

    // let test = $( "p" ).last().text( "left: " + position.left + ", top: " + position.top );
    console.log(`position`, position)


    /**
     * Loads tweets from the route /tweets/ and pulls the order in reverse.
     * * `onPost` only renders the current tweet.
     * @param {string} onPost 
     */
    const loadtweets = (onPost)=>{
        
        $.getJSON( "/tweets/", ( tweetData ) => {
            tweets = tweetData.reverse();

            if(onPost === 'currentTweet'){
                console.log("Triggered")
                const latestEntry = tweetData[0];
                const newTweetSection = 'body > main > section.new-tweet + section'
                return $(newTweetSection).prepend( createTweetElement( latestEntry ) );
            }

            return renderTweets(tweets);

        });
    }
    
    loadtweets();

    /**
     * Protects from XSS Attacks
     * * Create's temporary div elment
     * * Create's a textNode from the input and adds it within the temporary div.
     * * Returns only the innerHTML of the text (pure text format of any symbols)
     * @param {String} input 
     * @returns sanitizedText
     */
    const escape = (input)=>{
        let temporaryContainer = document.createElement("div");
        temporaryContainer.appendChild(document.createTextNode(input));
        return temporaryContainer.innerHTML;
      };

    /**
     * Create's the Tweet Element for append/prepending
     * * Takes in input data & reformats correctly 
     * * Sanitizes input to prevent XSS with the `escape(string)` function.
     * @param {object} tweetData 
     * @returns a formatted element for Tweets
     */
    const createTweetElement = (tweetData)=>{

        const username = escape(tweetData.user.name);
        const handle = escape(tweetData.user.handle);
        const tweetMessage = escape(tweetData.content.text);
        const createdAt = escape(tweetData.created_at);
        const timestamp = timeago.format(createdAt);
        let avatar = escape(tweetData.user.avatars)
        const defaultAvatar = 'icon-user-01';
        
        if(!avatar){ avatar = defaultAvatar }

        const tweet = 
        `<section>
            <article class="tweet">
            <header>
                <div><img src="${avatar}" title="${username}" alt="${username}'s Profile Photo"><h2>${username}</h2></div>
                <address class="author"><a rel="author" href="#">${handle}</a></address>
            </header>
            <section class="tweet_message">
                <p>${tweetMessage}</p>
            </section>
            <footer>
                <time class="postedDateAndTime" datetime="${timestamp}">${timestamp}</time>
                <span class="tweet-actions">
                <span class="icon-flag"></span>
                <span class="icon-retweet"></span>
                <span class="icon-like"></span>
                </span>
            </footer>        
            </article>
        </section>`;
        
        return tweet;
    }

    /**
     * Loops through existing tweets & appends to the Tweets Container
     * * Uses the `createTweetElement(object)` function
     * @param {object} tweets 
     */ 
    const renderTweets = (tweets)=>{

        for( let tweet of tweets){
            $(tweetsContainer).append( createTweetElement(tweet) );
        }   
    }

    /**
     * Focus's the user on the Tweet input field
     * * [ ] Goal - add mini background animation if time permits
     */
    const focusOnInput = ()=>{ 
        $(textAreaInput).focus(); 
    }
       

    // force HTML5 validation (Even though they can remove it manually)
    $(textAreaInput).prop('required',true);

    /* On Tweet */
    $(tweetForm).on('submit', (event)=>{
        event.preventDefault();

        // grab the int value of the text counter
        const counter = parseInt( $('section.new-tweet output.counter').text() );

        const submission = $(textAreaInput).val();
        const tooManyCharacters = (counter < 0);
        const noCharacters = submission === '' || submission === null;
        const warning = $('.warning');
        
        if(tooManyCharacters || noCharacters){
            $(warning).removeClass( 'hidden' );

            /* slideDown method available if required but I found it sluggish */
            // if ( $( warning ).is( ":hidden" ) ) {
            //     $( warning ).slideDown( "slow" );
            //   } else {
            //     $( warning ).hide();
            //   }
              
            if(tooManyCharacters){
                focusOnInput();
                
                return $(warning).text( `Woops! We've used too many characters.` );
            }

            focusOnInput();
            return $(warning).text( `Woops! We've forgotten our tweet!` );
        }

        $(tweetButton).text('Posting Tweeting');

        $.post({
            type: "POST",
            url: "/tweets/",
            data:  $(tweetForm).serialize(),
            success: ()=>{
                $(warning).addClass( 'hidden' );
                $(textAreaInput).val('');
                $(tweetButton).text('Tweet'); 
                
            }
        }).done(()=>{

            loadtweets('currentTweet');  
        });  

    });

    $( "span.navCTA" ).click(()=>{
        
        let scrollLocation = $(window).scrollTop();

        if (scrollLocation === 400){
            return $(window).scrollTop('680')
        }
        
        $(window).scrollTop('400');
    });

    // Scroll to to Top Function
    // [ ] Note: Requested to put in Composer.js file 
    // (not sure why single function new file)?
    $( window ).scroll(()=>{
        
        let scrollLocation = $(window).scrollTop();
        if(scrollLocation > 400){
            
            $('.scrollToTop').css('display', 'hidden');
            return $('.scrollToTop').show();
        }

        $('.scrollToTop').hide();
    });

    $( '.scrollToTop' ).click(()=>{
        $(window).scrollTop('0');
    });


});