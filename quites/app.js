let quotes=['The life in front of you  is  for more impoetent then the life behind you',
    'Nothing is impossible the word itself says "I m possible !',
    'Everything is hard before it get easy ',
    'To provide care for the people who once cared for us is one of life gratest honors',
   ]
    
function generatequote(){
   let randomquote=Math.floor(Math.random()*quotes.length)
   document.getElementById("quote").innerHTML=quotes[randomquote];
   document.getElementById("para").style.display="none";
}
