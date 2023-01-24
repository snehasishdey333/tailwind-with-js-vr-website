const btn=document.getElementById('hamburger-menu-btn')
const mobileMenu=document.getElementById('mobile-menu')

btn.addEventListener('click',navToggle);

function navToggle(){
    // alert(123);
    // btn.classList.add('open')
    // btn.classList.remove('open')
    btn.classList.toggle('open')
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('hidden')
}