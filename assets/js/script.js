'use strict';
window.addEventListener('DOMContentLoaded', () =>{
    const navbar = document.querySelector('.nav')
    window.addEventListener('scroll', ()=>{
        navbar.classList.toggle('active', window.scrollY > 100)
    })
})