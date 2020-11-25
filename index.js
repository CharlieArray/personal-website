//--------Progressive Render of HTML Elements to DOM---------------------------------//

function renderAboveFoldElements(){

  $('header').append(`<br>
        <nav>
          <a href="#header">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a> <br>
        </nav>   

          <span id='js-main-banner' class='hidden'>
            <h1>Software Developer</h1>
               <span id='js-name' class='hidden'>
                  <h3 style="margin-top: -5px; text-decoration: none; opacity: .80;">
                    Charles Ybarra</h3>
               </span>
           </span>
            <div class="js-quote-render hidden"></div>
    `);

    $('#loader-span').append(`<img src="images/loader.gif" id="loader" class="img-custom hidden" alt="loading animation">`)

  $('#div-banner-image-quote').append(`
        <section id="banner-image">
          <!--Main image/theme for webpage, personal photo from Iceland-->
          <img src="images/glacier-small.jpg" id="glacier" alt="picture of glacier with overcast skies" class="center-large">
          <div class="js-quote-render2"></div>
        </section>
  `);

  $('#introduction-component').append(`
        <section id="about">
            <header>  
          <h2>Introduction</h2>
            </header>
          <div class="flex-container">
            <img src="images/me.jpeg" class="center-medium" alt="Charlie👋">
            <div class="flex-child">
              <h3>Who I am:</h3>
                  <p>Hi- I'm Charlie👋. I'm a software developer in Austin, TX. <br><br>
                  I <ins><b>design</b></ins> and <ins><b>build</b></ins> fully functional web applications and user interfaces. <br><br>I'm a former military officer and engineer, and I enjoy working with others to solve problems.</p>
              </div>
            <div class="flex-child">
                <h3>What about the travel photos?</h3>
                    <img src="images/camera.png" alt="camera vector graphic" class="center-smedium">
                  <p>When I'm not glued to my computer, I enjoy traveling. <br><br> The photos on this website are from my 2019 vacation in Iceland: Sólheimajökull Glacier and the Black Sands Beach.</p>
              </div>
            </div>
        </section>
  `);

  $('#about-me-component').append(`
  <header>  
  <h2>About Me</h2>
  </header>
  <div class="flex-container">
    <div class="flex-child-larger">
      <h3>Why software development?</h3>
        <p>I enjoy being creative and building things. Software development allows for unlimited 
          possibilities to build anything you could imagine: a software app, website, or even program a rocket motor sequence.
          There is no limit to the possibilities.</p>
      <video class="videoCRT hidden opacity-medium" id="slowVid" loop muted playsinline>
        <source src="images/CRT-TEXTURES-(1080)/TRANSITIONS/SPACE_02.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
      <div class="flex-child">
        <h3>Hobbies and Interests:</h3>
          <ul id="ul-hobbies">
            <li>🏔️ Traveling</li>
            <li>📸 Photography</li>
            <li>📈 Investing</li>
            <li>🔨 Assembling Ikea Furniture</li>
          </ul>
      </div>
    </div>
`);

  $('#div-banner-image-quote, #introduction-component, #about-me-component')
  .addClass('section-div');
}


//-----------------Render Bottom Elements -------------------//

function renderBottomFoldElements(){

  $('#portfolio-component').append(`
      <section id="portfolio">
            <header>  
            <h2>Project Portfolio</h2>
            <h3>In Progress</h3>
            </header>
        <div class="flex-child-larger">
          <div class="container2">
              <div class="item2"><a href="https://charliearray.github.io/api-hiking-app/" target="_blank"><img src="images/mountain-ortho.jpg" alt="mountains">Trail Finder App 🏕️</a>
                <p>App allows users to find trails in U.S or Canada, and view detailed trail maps. App programmed in JavaScript and two APIs were used.
                </p></div>

              <div class="item2"><a href="https://charliearray.github.io/quiz-app/" target="_blank"><img src="images/piggy-bank.jpg" alt="piggy-bank">Investing Quiz App📈</a>
                <p>
                  Interactive Quiz covering advanced investing concepts. More than 70% of app programmed with JavaScript and jQuery library
                </p></div>

              <div class="item2"><a href="https://charliearray.github.io/park-search-app/" target="_blank"><img src="images/phone-nav.jpg" alt="phone"> Park Search App 🌲</a>
                <p>App to find national parks and landmarks by state utilized API GET requests to the National Park Service. App programmed in: JavaScript and jQuery
                </p></div>

              <div class="item2"><a href="https://github.com/CharlieArray/project-photo" target="_blank"><img src="images/security.jpg" alt="orthographic graphic">Project Photo</a>
                <p>
                This is a description of the Photo App I built. I'll share my goals for creating it, the skills/languages I applied, and what I learned doing it.
                </p></div>

              <div class="item2"><a href="https://github.com/CharlieArray/project-bookmark" target="_blank"><img src="images/cellphone.jpg" alt="orthographic graphic">Project Bookmark</a>
                <p>
                This is a description of the Bookmark App I built. I'll share my goals for creating it, the skills/languages I applied, and what I learned doing it.
                </p></div>
          </div>
        </div>
    </section> 
  `);


  $("#programming-component").append(`
        <header>  
        <h2>Experience and Tech Stack</h2>
        </header>
        <div class="flex-child">
          <img src="images/skills-modified.jpg" alt="Skills tree" class="center-large opacity-medium">
        </div>
  `);

  $('#contact').append(`
          <header>  
            <h2>Contact</h2>
          </header>
            <h3>For business opportunities: Linkedin and contact form below</h3>
    
          <div class="group">
            <div class="item"><img src="images/black-beach-square.jpg"  alt="Dark skies overshadow moody beach in Iceland" ></div>
            <div class="item"><img src="images/charlie-beach-square.jpg" alt="Person standing on Black Sands Beach"></div>
            <div class="item"><img src="images/jengarock-square.jpg" alt="Ancient volcanic stacked up on top of each other" ></div>
          </div>
      
      <div id="form-div">
        <form action="https://formspree.io/xzbjnjlb" method="POST">
          <label>💬<input type="text" name="name" placeholder="Your Name"></label><br>
          <label>📧<input type="text" name="_replyto" placeholder="Your Email"></label><br>
          <textarea name="message" placeholder="📝Your Message" required="" maxlength="250"></textarea><br>
          <button type="submit">Send</button>
        </form>
      </div>
  `);

 
  $('#portfolio-component, #programming-component, #contact-component')
  .addClass('section-div');

  $('footer').append(`
    <div>
    <!--Hyperlinks to Github and Linkedin-->
    <nav>
      <a href="#header">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="https://github.com/CharlieArray" target="_blank">Github</a>
      <a href="https://www.linkedin.com/in/engineercharlie/" target="_blank">Linkedin</a>
    </nav>
    </div>
    `)

  $('#copyright').append(`<h3 id="copyright">All content copyrighted or licensed by Charles Ybarra © 2019-2020</h3>`)

  $('#loader').fadeOut(3000);

}


//------AJAX Dynamic Lazy Loading on Page Scroll---------------------//

//global screen variable
const screenWidth = $(window).width();


function dynamicScrollListener(){

  var ajaxInProgress = false;

  $(window).scroll(function(){
    //if ajaxInProgress == true, script stops//
    if(ajaxInProgress) return;
    ajaxInProgress = true;

    // get the bottom position
    // var bottom_position = $(document).height() - ($(window).scrollTop() + $(window).height());
    var document_height = $(document).height()
    var scroll_data = {
            action: 'user_scroll',
            //container_id: container
        }; 

    $.ajax({ 
            //url: 'index.html',
            data: scroll_data,
            context: document.body,
          success: () => {
            //  setInterval(function(){
            //    console.log(document_height),10000})
            if(document_height < 2800){
               ajaxInProgress = false;
               renderBottomFoldElements();
             }
          },
          error: () => {
            console.log("Error: Ajax Request Failure for Remaining Page Elements");
            setTimeout(() => { console.log("Reloading Page") }, 1000);
            setTimeout(() => { location.reload(true); }, 4000);
          }
    })
    $('a').fadeIn(1500);

    fadeInIntroBottom();
  })
}
  
  
//----------Quote API Functions-----------------------------------------//

function displayQuoteApi(data){

  function generateNewQuote(){
    const quotes = data;
    //console.log(quotes)

    //generates random # from json data array length
    const random = Math.floor(Math.random() * quotes.length);
    
    //array bracket notation for random quote 
    const randomQuote = quotes[random];

    shortQuotesOnly(randomQuote);
  };

  function shortQuotesOnly(randomQuote){

    /*if quote > 85 char in length OR 
      quote from certain individual => different quote generated*/
    if (randomQuote.text.length > 85 || randomQuote.author == "Donald Trump"){
      return generateNewQuote();
    }

    else if(screenWidth < 800 ){
      if(randomQuote.author == null){randomQuote.author = "Unknown"}
      $('.js-quote-render').append(
      `
       <h3 style="font-size: 14.5px; margin-bottom:3px; color:#ffffe0">${randomQuote.text}</h3>
       <h3 style="font-size: 14.5px; margin:0px; color:#ffffe0">- ${randomQuote.author}</h3>
       
      `)
      $('.js-quote-render').fadeIn(3500);

    }

    else { 
      if(randomQuote.author == null){randomQuote.author = "Unknown"}
      $('.js-quote-render').append(
      `<
       <h3 style="margin-bottom:3px; color:#ffffe0">${randomQuote.text}</h3>
       <h3 style="margin:0px; color:#ffffe0">- ${randomQuote.author}</h3>
      `)
      $('.js-quote-render').fadeIn(3500);
    };

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


//-------Animation and Transition Functions--------------------------//

function slowAnimationPlayback(){
  let video= document.getElementById('slowVid');
  video.playbackRate = .65;  
}

function fadeInIntroTop(){
      $('.section-div').addClass('hidden');
      $('a').addClass('hidden');
      $('#js-main-banner').fadeIn(1500);
      $('#js-name').fadeIn(2500);
      setTimeout(function(){
        $('.section-div').fadeIn(3000)
        $('#loader').removeClass('hidden')
      } , 2700);
  }

function fadeInIntroBottom(){
  $('.section-div').addClass('hidden');

    setTimeout(function(){
      $('.section-div').fadeIn(2500);
      $('a').fadeIn(3000);
    },500)
};

function onHover(){
  $('#slowVid').hover( event => 
    $(event.currentTarget).attr('autoplay', 'autoplay'),
    event => {
      $(event.currentTarget).fadeOut(2400, () =>
        $(event.currentTarget).removeAttr('loop')
      )}
  )};
      

//Reduces File Size for Responsive Design
 function preventSlowMobile() {
  if (screenWidth >= 850) {
    $('#glacier').attr('src', 'images/glacier.jpg');
    $('.videoCRT').removeClass('hidden');
  };
};


//---------Document on Ready/Page Load ----------------------------//

// On Page Load 

function onPageLoad(){
  renderAboveFoldElements();
  fadeInIntroTop();
  onHover();
  preventSlowMobile();
  dynamicScrollListener();
  getQuoteApiData();
  slowAnimationPlayback();
}

//Document Ready Function 

$(document).ready(function(){
  onPageLoad();
});

