let getBody = document.body;
let getTheme = document.querySelector(".theme");
let getThemeMode = getTheme.querySelectorAll("span");
let darkMode = localStorage.getItem("darkmode");

//.......................dark mode

if (darkMode === "enabled") {
  getBody.classList.add("dark-mode");
  getThemeMode.forEach((element) => {
    element.id === "active-mode" ? "disactive-mode" : "active-mode";
  });
}

getTheme.addEventListener("click", () => {
  if (darkMode !== "enabled") {
    localStorage.setItem("darkmode", "enabled");
    getBody.classList.toggle("dark-mode");
  } else {
    localStorage.setItem("darkmode", null);
    getBody.classList.remove("dark-mode");
  }

  getThemeMode.forEach((element) => {
    element.id === "active-mode"
      ? (element.id = "disactive-mode")
      : (element.id = "active-mode");
  });
});

//....................... menu nav
let menuNavOpen = document.querySelector("#menu-nav-open");
let menuNavClose = document.querySelector("#menu-nav-close");
let conNav = document.querySelector("nav");

menuNavOpen.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
  conNav.style.display = "flex";
  menuNavOpen.style.display = "none";
  menuNavClose.style.display = "block";
  header.style.cssText =
    "position: fixed; top: 0; z-index: 10000000;  opacity:1";
});
menuNavClose.addEventListener("click", () => {
  document.body.classList.remove("no-scroll");
  conNav.style.display = "none";
  menuNavOpen.style.display = "block";
  menuNavClose.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 767) {
    conNav.style.display = "flex";
    menuNavOpen.style.display = "none";
    menuNavClose.style.display = "none";
  } else {
    conNav.style.display = "none";
    menuNavOpen.style.display = "block";
    menuNavClose.style.display = "none";
  }
});

//............................ for skills sections

let skillIcons = document.querySelector(".skill-icons");

let iconsLogo = [
  "icon-skills/icon-javscript.svg",
  "icon-skills/icon-typescript.svg",
  "icon-skills/icon-react.svg",
  "icon-skills/icon-nextjs.svg",
  "icon-skills/icon-nodejs.svg",
  "icon-skills/icon-express.svg",
  "icon-skills/icon-nest.svg",
  "icon-skills/icon-socket.svg",
  "icon-skills/icon-postgresql.svg",
  "icon-skills/icon-mongodb.svg",
  "icon-skills/icon-sass.svg",
  "icon-skills/icon-tailwindcss.svg",
  "icon-skills/icon-figma.svg",
  "icon-skills/icon-cypress.svg",
  "icon-skills/icon-storybook.svg",
  "icon-skills/icon-git.svg",
];

let iconsTitle = [
  "javascript",
  "typescript",
  "react",
  "next.js",
  "node.js",
  "express.js",
  "nest.js",
  "socket.io",
  "postgreSQL",
  "mongoDB",
  "sass/scss",
  "tailwindcss",
  "figma",
  "cypress",
  "storybook",
  "git",
];

if (!getBody.className) {
  iconsLogo = [
    "icon-skills/icon-javscript.svg",
    "icon-skills/icon-typescript.svg",
    "icon-skills/icon-react.svg",
    "icon-skills/icon-nextjs.svg",
    "icon-skills/icon-nodejs.svg",
    "icon-skills/icon-expressdek.svg",
    "icon-skills/icon-nest.svg",
    "icon-skills/icon-socketdrk.svg",
    "icon-skills/icon-postgresql.svg",
    "icon-skills/icon-mongodb.svg",
    "icon-skills/icon-sass.svg",
    "icon-skills/icon-tailwindcss.svg",
    "icon-skills/icon-figma.svg",
    "icon-skills/icon-cypressdrk.svg",
    "icon-skills/icon-storybook.svg",
    "icon-skills/icon-git.svg",
  ];
}

for (let i = 0; i < iconsLogo.length; i++) {
  let createContentSkills = document.createElement("div");
  let createIcons = document.createElement("img");
  let createIconsTitle = document.createElement("span");

  // Set attributes
  createIcons.setAttribute("src", iconsLogo[i]);
  createIcons.setAttribute("alt", iconsTitle[i]);
  createContentSkills.className = iconsTitle[i];
  createIconsTitle.innerText = iconsTitle[i];

  // Append elements
  createContentSkills.appendChild(createIcons);
  createContentSkills.appendChild(createIconsTitle);
  skillIcons.appendChild(createContentSkills);
}

//...................Sticky header on scroll

let header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 15) {
    header.style.cssText =
      "position: fixed; top: 0; z-index: 10000000;  opacity: 0.9";
  } else {
    header.style.cssText =
      "position: relative; top: 0; z-index: 10000000000000;  opacity: 1";
  }
});

//...................scroll to up

let upToHeader = document.getElementById("upToHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 767) {
    upToHeader.style.display = "block";
  } else {
    upToHeader.style.display = "none";
  }
});

//.......................experience section
