//Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");

const navItems = document.querySelectorAll(".nav-item");

const blur = document.querySelector(".blur");

const projdesc = document.querySelectorAll(".projdesc");
const projbtn = document.querySelectorAll(".btn-light");
const pdesc_exp = document.querySelector(".centerdiv");
let showpdesc = false;

/*projbtn.forEach(item => {
  item.addEventListener("click", projdesc_visable(item.id));
  console.log(this.id);
});*/

document.querySelectorAll(".btn-light").forEach(function(elem) {
  elem.addEventListener("click", function() {
    projdesc_visable(elem.id);
  });
  console.log(elem.id);
});
//Set Initial State of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    blur.classList.add("blur_on");
    navItems.forEach(item => item.classList.add("show"));

    //Set menu state to true
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    blur.classList.remove("blur_on");
    navItems.forEach(item => item.classList.remove("show"));
    //Set menu state
    showMenu = false;
  }
}

function projdesc_visable(id) {
  console.log(id);
  var divcontent = "";
  descDiv = document.getElementById("descdiv");
  switch (id) {
    case "proj1": {
      divcontent = " text for proj 1 in switch ";
      break;
    }
    case "proj2": {
      divcontent = " text for proj 2 in switch ";
      break;
    }
    case "proj3": {
      divcontent = " text for proj 3 in switch ";
      break;
    }
    case "proj4": {
      divcontent = " text for proj 4 in switch ";
      break;
    }
    case "proj5": {
      divcontent = " text for proj 5 in switch ";
      break;
    }
  }
  if (!showpdesc) {
    pdesc_exp.classList.add("show");
    blur.classList.add("blur_extra");

    descDiv.innerHTML = divcontent;
    showpdesc = true;
  } else {
    pdesc_exp.classList.remove("show");
    blur.classList.remove("blur_extra");
    showpdesc = false;
  }
}
