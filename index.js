
//Quote API Functions

function displayQuoteApi(data){

  function generateNewQuote(){
    const quotes = data;

    //generates random # from json data array length
    const random = Math.floor(Math.random() * quotes.length);
    
    //array bracket notation for random quote 
    const randomQuote = quotes[random];

    shortQuotesOnly(randomQuote)
  };




  function shortQuotesOnly(randomQuote){
    /*if quote is greater than 100 characters in length OR 
      quote from certain individual => different quote is generated*/
    if (randomQuote.text.length > 100 || randomQuote.author == "Donald Trump"){
      $('.js-quote-render').empty();
      return generateNewQuote();
    }

    else if(randomQuote.author == null){randomQuote.author = "Unknown"}
      $('.js-quote-render').append(
      `
       <h3 style="margin-bottom:3px; color:#ffffe0">${randomQuote.text}</h3>
       <h3 style="margin:0px; color:#ffffe0">- ${randomQuote.author}</h3>
       
      `)
  }
  generateNewQuote();    
}


function getQuoteApiData(){
  let baseURL = 'https://type.fit/api';
  let endURL = '/quotes';
  let stringURL = baseURL + endURL;

  fetch(stringURL)
    .then(response => response.json())
    .then(data => displayQuoteApi(data))
}


//Animation and Transition Functions

function slowAnimationPlayback(){
  let video= document.getElementById('slowVid');
  video.playbackRate = .65;  
}

/*UNDER DEVELOPMENT Cycle Image Feature
function cycleImages(){
  var $active = $('#cycler .active');
  var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
  $next.css('z-index',2);//move the next image up the pile
  $active.fadeOut(6000,function(){//fade out the top image
  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
  $next.css('z-index',3).addClass('active');//make the next image the top one
  //console.log($('.center-medium').width()+" image is")
  //console.log($('.flex-child-larger').width()+" flex-child-larger is")  
  });
}
*/


// On Page Load 

function onPageLoad(){
  slowAnimationPlayback();
  getQuoteApiData();
}

//Document Ready Function 

$(document).ready(function(){
  onPageLoad();
  // run every 4s
  //setInterval('cycleImages()', 4000);
});

