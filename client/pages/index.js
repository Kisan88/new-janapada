// navbar js goes here


const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

document.querySelector("#check").addEventListener("change", (e) => {
  (document.querySelector("#check").checked)? document.querySelector("#navb").classList.add("active"): document.querySelector("#navb").classList.remove("active")
})



// navbar js ends here


// news section starts here
var marquee = document.querySelector('marquee');
marquee.addEventListener('mouseenter', function() {
  marquee.stop();
});

marquee.addEventListener('mouseleave', function() {
  marquee.start();
});
// news section ends here


// var showText = function (target, message, index, interval) {   
//   if (index < message.length) {
//     $(target).append(message[index++]);
//     setTimeout(function () { showText(target, message, index, interval); }, interval);
//   }
// }

// $(function () {
//   showText("#msg", "Janapada Loka", 0, 300);   
// });