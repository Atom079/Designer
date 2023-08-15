'use strict';
window.addEventListener('DOMContentLoaded', () =>{
    const navbar = document.querySelector('.nav')
    window.addEventListener('scroll', ()=>{
        if (window.scrollY >= 100) {
            navbar.classList.add('active');
        }else{
            navbar.classList.remove('active')
        }
    })
})