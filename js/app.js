const header = document.getElementById('header');
const headerToggler = document.getElementById('header-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const overlay = document.getElementById('overlay');
const desktopMenu = document.getElementById('desktop-menu');

// toggle close icon on click
headerToggler.addEventListener('click' , ()=>{
    headerToggler.classList.toggle('active');
    if(header.classList.contains('open')){
        header.classList.remove('open');
        mobileMenu.classList.toggle('d-none');
        overlay.classList.toggle('fade-out');
    }else{
        header.classList.add('open');
        mobileMenu.classList.toggle('d-none');
        overlay.classList.toggle('fade-out');
    }
});

// hide mobile menu when click link
let links = mobileMenu.querySelectorAll('a');
links.forEach(ele=>{
    ele.addEventListener('click' , ()=>{
        header.classList.remove('open');
        overlay.classList.remove('fade-out');
    });
});