// navbar js goes here

// document.onreadystatechange = function() {
//     let lastScrollPosition = 0;
//     const navbar = document.querySelector('.navbar');
//     const service = document.querySelector('.service');
//     window.addEventListener('scroll', function(e) {
//       lastScrollPosition = window.scrollY;
      
//       if (lastScrollPosition > 10){
//         navbar.classList.add('navbar-dark');
//         service.classList.add('service-dark');
//       }
//       else{
//         navbar.classList.remove('navbar-dark');
//         service.classList.remove('service-dark');
//       }
//     });
//   }


function show() {
 
  /* Access image by id and change
  the display property to block*/
  document.getElementById('icon5')
          .style.display = "block";

  document.getElementById('btnid')
          .style.display = "none";
}


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


  
     
  $("#thumbnail-container img").hover(function() {
    var src = $(this).attr("src");
    $("#preview-enlarged img").attr("src", src);
    $('.thumbnail').removeClass('focused');
    $(this).addClass('focused');

});


const minusBtn=document.querySelector('.minus');
const plusBtn=document.querySelector('.plus');
const qtyTxt=document.querySelector('#qty');

minusBtn.addEventListener('click',()=>{
let qty= parseInt(qtyTxt.value);
if(qty>0){
qty--;
qtyTxt.value=qty;
}
});
plusBtn.addEventListener('click',()=>{ 
let qty= parseInt(qtyTxt.value);
if(qty>=0 && qty<5){
qty++;
qtyTxt.value=qty;
}
});