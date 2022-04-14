  
                    var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <=
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("nav ul .nav-links a").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  var selector = `nav li a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll("nav ul .nav-links a");



window.addEventListener('scroll', fade);

function fade(){

  var fades = document.querySelectorAll('.fade');
  for(var i = 0 ; i < fades.length; i++){
    var windowheight = window.innerHeight;
    var fadetop = fades[i].getBoundingClientRect().top;
    var fadepoint = 150;
    if(fadetop < windowheight - fadepoint){
      fades[i].classList.add('active2')
    } else {
      fades[i].classList.remove('active2')
    }
}
} 

function links () {
  var link = document.getElementsByTagName('a').addEventListener('click',(url,"_black"))
}

                    