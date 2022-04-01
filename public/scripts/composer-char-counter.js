$().ready(()=>{

  const characterLimit = 140;
  let inputLength = 1;
    
  const checkLength = ()=>{
    inputLength = $('textarea#tweet-text', this).val().length;
    return inputLength;
  };

  const limitControl = ()=>{
    if (characterLimit - checkLength() < 0) {
      outputText.addClass('characterLimit');
      $('.warning').removeClass('hidden');
      $('.warning').text(`Woops! We've used too many characters.`);

    } else {
      $('.warning').addClass('hidden');
      outputText.removeClass('characterLimit');
    }
  };
    
  const outputText = $('textarea#tweet-text', this).next().children('output');

  $('textarea#tweet-text').on('keydown', (letter)=>{
    inputLength++;
        
    limitControl();
        
    outputText.text(characterLimit - checkLength());

    // enter
    // stretch goal [ ] trigger Post with enter
    // if (letter.keyCode == '13') {
    //   return false;
    // }

  });
 
  $('textarea#tweet-text').on('keyup', (letter)=>{
    outputText.text(characterLimit - checkLength());
    limitControl();
        

    console.log(characterLimit - checkLength());
  });
 
});