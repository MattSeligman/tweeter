/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

var characterLimit = 140;
$(document).ready(function(){

 $('input').on('keydown', ( pressed )=>{

    // bugs to fix 
    // [] Delete key won't detect in current method
    // [] HTML limit can be removed.)
   if(characterLimit === 0){ console.log(pressed); return false}
   if(characterLimit > 0){
     characterLimit--;

     $('output.counter').text(characterLimit);

   }
             
 });

});