// toggle button

function openNav() {
  var nav_width = document.getElementById("navbar");
  var toggle_icon = document.getElementById("nav_toggle_icon");

  if (nav_width.style.width == "0%") {
    toggle_icon.classList.add("fa-times");
    toggle_icon.classList.remove("fa-bars");
    nav_width.style.width = "50%";
    nav_width.style.margin = "0 1%";
  } else {
    toggle_icon.classList.add("fa-bars");
    toggle_icon.classList.remove("fa-times");
    nav_width.style.width = "0%";
    nav_width.style.margin = "0 3%";
  }
}
