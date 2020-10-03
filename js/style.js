var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// $(document).ready(function(){
//   // check if window is top or not
//   // if yes: fade in 
//   // if no: fade out
//   $(window).scroll(function(){
//     if ($(this).scrollTop() > 100){
//       $('.scroll-to-top').fadeIn();
//       console.log("hihi");
//     } else{
//       $('.scrool-to-top').fadeOut();
//     }
//   });

//   //click event to scroll to top
//   $('.scroll-to-top').click(function (e) { 
//     e.preventDefault();
//     $('html, body').animate({scrollTop: 0}, 800);
//     return false;
//   });
// });