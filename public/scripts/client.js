/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

$(() => {

// Fake data taken from initial-tweets.json
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const renderTweets = function(tweets) {
    
    const tweetsContainer = 'body > main';

    // loops through tweets
    tweets.forEach((tweet)=>{
        
        // calls createTweetElement for each tweet
        // takes return value and appends it to the tweets container
        $(tweetsContainer).append( createTweetElement(tweet) );
    })

}

const createTweetElement = (tweetData)=>{
    const tweet = 
    `<section>
        <article class="tweet">
        <header>
            <h2><img src="${tweetData.user.avatars}" title="${tweetData.user.name}" alt="${tweetData.user.name}'s Profile Photo">${tweetData.user.name}</h2>
            <address class="author"><a rel="author" href="#">${tweetData.user.handle}</a></address>
        </header>
        <section class="tweet_message">
            <p>${tweetData.content.text}</p>
        </section>
        <footer>
            <time datetime="${tweetData.created_at}">10 days ago (To calculate with JS)</time>
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

renderTweets(data);

});