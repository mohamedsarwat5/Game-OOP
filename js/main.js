import { Home } from "./Home.js";



let home = new Home()





document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar"); // Adjust the selector for your navbar
    const navbarOffset = navbar.offsetTop;
  
    window.addEventListener("scroll", () => {
      if (window.scrollY >= navbarOffset) {
        navbar.classList.add("fixed-top");
      } else {
        navbar.classList.remove("fixed-top");
      }
    });
  });
  