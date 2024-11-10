import "remixicon/fonts/remixicon.css";

const menuIcon = document.getElementById("menuIcon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
