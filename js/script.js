const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
    localStorage.setItem('theme', tmp),
    tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];
  if(next=="light"){
    document.getElementById('home').style.backgroundImage= "url('https://cs8.pikabu.ru/post_img/big/2016/08/10/12/14708614101409093.png')";
  }else{
    if(next=="dark"){
      //
      //https://www.hipsthetic.com/wp-content/uploads/2016/04/Desert-Night-Desktop-Wallpaper-1024x576.png
      document.getElementById('home').style.backgroundImage= "url('https://i.pinimg.com/originals/6a/24/9d/6a249dd5a2292ba60220435ae8dbf4ba.jpg')";

    }else{
      document.getElementById('home').style.backgroundImage= "url('https://oir.mobi/uploads/posts/2021-03/1616971780_61-p-fon-dlya-rabochego-stola-minimalizm-63.jpg')";

    }

  }

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

$(document).ready(function () {
  
  document.getElementById('themeButton').onclick = toggleTheme;
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [ "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer",  "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  var typed = new Typed(".typing-3", {
    strings: ["Python",  "Java","C#" , "Dart", "Kotlin", "JavaScript", "SQL", "Php", "REST", "Flutter", "Flask", "Django", "Android Studio","Visual Studio Code", "Visual Studio", "PyCharm", "Data Studio"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});

/*
https://www.javascripttutorial.net/javascript-dom/javascript-form/
*/