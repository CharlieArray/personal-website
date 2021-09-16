//--------Progressive Render of HTML Elements to DOM---------------------------------//

function renderAboveFoldElements() {
  $("header").append(`<br>
        <nav>
          <a href="#header">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a> <br>
        </nav>   
          <div id='js-main-banner' class='hidden'>
            <h1>Software Developer</h1>
               <div id='js-name' class='hidden'>
                  <h3 style="margin-top: -5px; text-decoration: none; opacity: .80;">
                    Charles Ybarra</h3>
               </div>
          </div>
            <div class="js-quote-render hidden"></div>
    `);

  $("#div-banner-image-quote").append(`
        <section id="banner-image">
          <!--Main image/theme for webpage, personal photo from Iceland-->
          <img src="images/glacier-small.jpg" id="glacier" alt="picture of glacier with overcast skies" class="center-large">
          <div class="js-quote-render2"></div>
        </section>
  `);

  $("#introduction-component").append(`
        <section id="about">
            <header>  
          <h2>Introduction</h2>
            </header>
          <div class="flex-container">
            <img src="images/me.jpeg" class="center-medium" alt="handsome software developer">
            <div class="flex-child">
              <h3>Who I am:</h3>
                  <p>Hi - I'm Charlie. I'm a software developer in Austin, TX. <br><br>
                  If you want to be dramatic<b>:</b><br>app architect, software sorcerer, or full stack engineer works too. Really I just enjoy
                  <b>designing</b> and <b>building</b> beautiful web apps and user interfaces. <br><br>Former veteran to some<b>;</b> engineer to others, I like working with others to solve problems.</p>
              </div>
            <div class="flex-child">
                <h3>What about the travel photos?</h3>
                    <img src="images/camera.png" alt="camera vector graphic" class="center-smedium">
                  <p>When I'm not glued to my computer, I enjoy traveling and photography. <br><br> The photos on this website are from a recent trip to Iceland.</p>
              </div>
            </div>
        </section>
  `);

  $("#about-me-component").append(`
  <header>  
  <h2>About Me</h2>
  </header>
  <div class="flex-container">
    <div class="flex-child-larger">
      <h3>Why software development?</h3>
        <p>Software development allows for unlimited 
          possibilities to collaborate with a team and build anything you could imagine<b>:</b> a software app, website, or even program a rocket motor sequence.
          There is no limit to the creative possibilities.</p>
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

  $(
    "#div-banner-image-quote, #introduction-component, #about-me-component"
  ).addClass("section-div");
}

$("#loader-span").append(
  `<img src="images/loader.gif" id="loader" class="img-custom" alt="loading animation">`
);

//-----------------Render Bottom Elements ------------------------------------//

function renderBottomFoldElements() {
  //when eventTrigger is inserted/appended in DOM, targetElement fadeOut
  let eventTrigger = $("#portfolio");
  let targetElement = $("#loader");
  fadeElement(eventTrigger, targetElement);

  $("#portfolio-component").append(`
      <section id="portfolio">
            <header>  
            <h2>Project Portfolio</h2>
            </header>
        <div class="flex-child-larger">
          <div class="container2">
              <div class="item2"><a href="https://finance-app-client.vercel.app/" target="_blank"><img src="images/envelope.png" alt="orthographic graphic">Envelope Finance App✉️</a>
              <p>This is a financial stock watchlist app called Envelope. It allows people who are interested in investing to create a profile and search for stock prices by ticker symbol. I built the app because I'm passionate about investing. App utilizes React, Express, Node, and Postgres SQL database.</p>
              <a href="https://github.com/CharlieArray/finance-app" target="_blank">Source Code</a>
            </div>

            <div class="item2"><a href="https://charliearray.github.io/api-hiking-app/" target="_blank"><img src="images/mountain-ortho.jpg"          
              alt="mountains">Trail Finder App🏕️</a>
              <p>This app allows users to search trails in U.S or Canada and view detailed trail maps. App is designed for people interested in being outdoors, like myself. Tech stack used to program this app were JavaScript and 3rd party APIs.</p>
                <a href="https://github.com/CharlieArray/api-hiking-app" target="_blank">Source Code</a>
            </div>

            <div class="item2"><a href="https://charliearray.github.io/quiz-app/" target="_blank"><img src="images/piggy-bank.jpg" alt="piggy-bank">Investing Quiz App📈</a>
                <p>
                  This interactive quiz app discusses intermediate investing concepts. The app is designed to test people's knowledge of investing. I built this investing quiz app because I'm passionate about investing and want people to learn more. 70% of the app was programmed with JavaScript and jQuery
                </p><a href="https://github.com/CharlieArray/quiz-app" target="_blank">Source Code</a>
            </div>
          
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

  $("#contact").append(`
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

  $(
    "#portfolio-component, #programming-component, #contact-component"
  ).addClass("section-div");

  $("footer").append(`
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
    `);

  $("#copyright").append(
    `<h3 id="copyright">All content copyrighted or licensed by Charles Ybarra © 2019-2021</h3>`
  );
}

//-----Global variables----------------------------------------------------//
const screenWidth = $(window).width();

//------AJAX Dynamic Lazy Loading on Page Scroll-------------------------//

function dynamicScrollListener() {
  let ajaxInitiated = false;

  $(window).scroll(function () {
    //if ajaxInitiated == true, script stops//
    if (ajaxInitiated) return;
    ajaxInitiated = true;

    // get the bottom position
    const document_height = $(document).height();
    var bottom_position = $(document).height() - $(window).height();

    var scroll_data = {
      action: "user_scroll",
      //container_id: container
    };

    $.ajax({
      //url: 'index.html',
      data: scroll_data,
      context: document.body,

      success: () => {
        function ajaxSuccessful() {
          renderBottomFoldElements();
          $("a")
            .addClass("hidden")
            .removeClass("visibility-hidden")
            .fadeIn(2000);
          fadeInIntroBottom();
          ajaxInitiated = true;
        }

        if (screenWidth <= 920 && bottom_position < 1600) {
          ajaxSuccessful();
        } else if (
          screenWidth >= 920 &&
          bottom_position < 1700 &&
          document_height < 2700
        ) {
          ajaxSuccessful();
        }
      },

      error: () => {
        console.log("Error: Ajax Request Failure for Remaining Page Elements");
        setTimeout(() => {
          console.log("Reloading Page");
        }, 1000);
        setTimeout(() => {
          location.reload(true);
        }, 4000);
      },
    });
  });
}

//----------Quote API Functions----------------------------------------------//

function displayQuoteApi(data) {
  function generateNewQuote() {
    const quotes = data;
    //console.log(quotes)

    //generates random # from json data array length
    const random = Math.floor(Math.random() * quotes.length);

    //array bracket notation for random quote
    const randomQuote = quotes[random];

    shortQuotesOnly(randomQuote);
  }

  function shortQuotesOnly(randomQuote) {
    /*if quote > 85 char in length OR 
      quote from certain individual => different quote generated*/
    if (randomQuote.text.length > 85 || randomQuote.author == "Donald Trump") {
      return generateNewQuote();
    } else if (screenWidth < 800) {
      if (randomQuote.author == null) {
        randomQuote.author = "Unknown";
      }
      $(".js-quote-render").append(
        `
        <h3 style="font-size: 14.5px; margin:1%; margin-bottom:3px; color:#ffffe0">${randomQuote.text}</h3>
        <h3 style="font-size: 14.5px; margin:0px; color:#ffffe0">- ${randomQuote.author}</h3>
        `
      );
      setTimeout(function () {
        $(".js-quote-render").fadeIn(4100);
      }, 1000);
    } else {
      if (randomQuote.author == null) {
        randomQuote.author = "Unknown";
      }
      $(".js-quote-render").append(
        `
        <h3 style="margin:1%; margin-bottom:3px; color:#ffffe0">${randomQuote.text}</h3>
        <h3 style="margin:0px; color:#ffffe0">- ${randomQuote.author}</h3>
        `
      );
      setTimeout(function () {
        $(".js-quote-render").fadeIn(4100);
      }, 1000);
    }
  }

  generateNewQuote();
}

function getQuoteApiData() {
  let baseURL = "https://type.fit/api";
  let endURL = "/quotes";
  let stringURL = baseURL + endURL;

  fetch(stringURL)
    .then((response) => response.json())
    .then((data) => displayQuoteApi(data));
}

//-------Animation and Transition Functions---------------------------------------//

function slowAnimationPlayback() {
  if (screenWidth >= 900) {
    let video = document.getElementById("slowVid");
    video.playbackRate = 0.65;
  }
}

function fadeInIntroTop() {
  const targetElement = document.querySelector("#introduction-component");

  if (screenWidth <= 920) {
    bodyScrollLock.disableBodyScroll(targetElement);
    $(".section-div").addClass("hidden");
    $("a").addClass("visibility-hidden");
    $("#js-main-banner").fadeIn(2000);
    $("#js-name").fadeIn(3200);
    setTimeout(function () {
      $(".section-div").fadeIn(2800);
      $("#loader-span").removeClass("hidden");
      bodyScrollLock.enableBodyScroll(targetElement);
    }, 4500);
  } else {
    $(".section-div").addClass("hidden");
    $("a").addClass("visibility-hidden");
    $("#js-main-banner").fadeIn(2200);
    $("#js-name").fadeIn(2900);
    setTimeout(function () {
      $(".section-div").fadeIn(2800);
      $("#loader-span").removeClass("hidden");
    }, 4500);
  }
}

function fadeInIntroBottom() {
  $(".section-div").addClass("hidden");
  setTimeout(function () {
    $(".section-div").fadeIn(3200);
    $("a").fadeIn(3000);
  }, 300);
}

function fadeElement(eventTrigger, targetElement) {
  //when eventTrigger element is loaded in DOM => targetElement fadeOut
  $(eventTrigger).ready(() => {
    $(targetElement).fadeTo(3800, 0, () => {
      $(targetElement).css("visibility", "hidden");
    }); // duration, opacity, callback
  });
}

function onHover() {
  $("#slowVid").hover(
    (event) => $(event.currentTarget).attr("autoplay", "autoplay"),
    (event) =>
      $(event.currentTarget).fadeOut(2400, () => $(this).removeAttr("loop"))
  );
}

//Reduces File Size for Responsive Design
function preventSlowMobile() {
  if (screenWidth >= 900) {
    $("#glacier").attr("src", "images/glacier.jpg");
    $(".videoCRT").removeClass("hidden");
  }
}

//---------Document on Ready/Page Load -------------------------------------//

// On Page Load

function onPageLoad() {
  if (screenWidth < 900) {
    setTimeout(function () {
      renderAboveFoldElements();
      fadeInIntroTop();
      getQuoteApiData();
    }, 900);
    dynamicScrollListener();
    preventSlowMobile();
    onHover();
    slowAnimationPlayback();
  } else {
    renderAboveFoldElements();
    fadeInIntroTop();
    getQuoteApiData();
    preventSlowMobile();
    onHover();
    dynamicScrollListener();
    slowAnimationPlayback();
  }
}

//Document Ready Function

$(document).ready(function () {
  onPageLoad();
});
