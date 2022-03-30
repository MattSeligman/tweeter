$(document).ready(function(){

    const characterLimit = 140;
    let inputLength = 1;
    
    const checkLength = ()=>{
        inputLength = $('textarea#tweet-text', this ).val().length;
        return inputLength;
    }

    const limitControl = ()=>{
        (characterLimit - checkLength() <= 0 )
        ? outputText.addClass('characterLimit')
        : outputText.removeClass('characterLimit');
    }
    
    const outputText = $('textarea#tweet-text', this ).next().children('output');

    $('textarea#tweet-text').on('keydown', ( letter )=>{
        inputLength++
        
        limitControl();
        
        outputText.text( characterLimit - checkLength() )        

        // // delete key
        // if(letter.keyCode == '8'){
        //     return true;
        // }

        // // enter
        // if(letter.keyCode == '13'){
        //     console.log("Enter");
        //     return false;
        // }

    });
 
    $('textarea#tweet-text').on('keyup', ( letter )=>{  
        outputText.text( characterLimit - checkLength() );
        limitControl();   
    });
 
});