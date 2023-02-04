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