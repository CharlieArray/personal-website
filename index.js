
//Quote API Functions

function displayQuoteApi(data){

  const quotes = data;

  //generates random # from json data array length
  const random = Math.floor(Math.random() * quotes.length);
  
  //displays random # // data array bracket notation for random number 
  let randomQuote = quotes[random];


  if(randomQuote.author == null){randomQuote.author = "Unknown"}
  $('.quote-render').append(
      `
       <h3 style="margin-bottom:3px">${randomQuote.text}</h3>
       <h3 style="margin:0px">- ${randomQuote.author}</h3>
       <br>
      `)
}

function getQuoteApiData(){
  let baseURL = 'https://type.fit/api'
  let endURL = '/quotes'
  let stringURL = baseURL + endURL;

  fetch(stringURL)
    .then(response => response.json())
    .then(data => displayQuoteApi(data))
}


//Animation and Transition Functions

function slowAnimationPlayback(){
  let video= document.getElementById('slowVid');
  video.playbackRate = .55;  
}


// On Page Load 
function onPageLoad(){
  slowAnimationPlayback();
  getQuoteApiData();
}

//Document Ready Function 
$(onPageLoad)

