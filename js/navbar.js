function toggleCollapse(){
    const collapse = document.querySelector('.collapse');
    let body = document.querySelector('body');
    if(collapse.style.height == '100vh'){
        collapse.style.height = '0';
        body.classList.remove('modal-open');
    }else{
        collapse.style.height = '100vh';
        body.classList.add('modal-open');
    }
}


window.addEventListener('scroll', function() {
  let sections = document.querySelectorAll('section');
  let navItems = document.querySelectorAll('.nav-item a');

  sections.forEach((section, index) => {
    let rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      navItems.forEach(item => item.classList.remove('active'));
      navItems[index].classList.add('active');
    }
  });
});

window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navItems = document.querySelectorAll('.nav-item-pc a');
  
    sections.forEach((section, index) => {
      let rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        navItems.forEach(item => item.classList.remove('active'));
        navItems[index].classList.add('active');
      }
    });
  });
  