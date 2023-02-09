// navbar js goes here

document.onreadystatechange = function() {
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.navbar');
    const service = document.querySelector('.service');
    window.addEventListener('scroll', function(e) {
      lastScrollPosition = window.scrollY;
      
      if (lastScrollPosition > 10){
        navbar.classList.add('navbar-dark');
        service.classList.add('service-dark');
      }
      else{
        navbar.classList.remove('navbar-dark');
        service.classList.remove('service-dark');
      }
    });
  }
  
  
  
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