"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".nav");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("active", window.scrollY > 100);
  });
  // Responsive navbar js
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".nav-list");
  const navListLink = document.querySelectorAll(".nav-list-link");
  burger.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
  navListLink.forEach((item) => {
    item.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  });
});
