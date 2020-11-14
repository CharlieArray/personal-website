
//Quote API Functions

function displayQuoteApi(data){
console.log(data)

  function generateNewQuote(){
    const quotes = data;

    //generates random # from json data array length
    const random = Math.floor(Math.random() * quotes.length);
    
    //array bracket notation for random quote 
    const randomQuote = quotes[random];

    shortQuotesOnly(randomQuote)
    console.log(randomQuote.text.length);
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
  video.playbackRate = .70;  
}


// On Page Load 

function onPageLoad(){
  slowAnimationPlayback();
  getQuoteApiData();
}

//Document Ready Function 

$(onPageLoad)

