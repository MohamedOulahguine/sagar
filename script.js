let getBody = document.querySelector("body");
let getTheme = document.querySelector(".theme");
let getThemeMode = getTheme.querySelectorAll("span");
let darkMode = localStorage.getItem("darkmode");
let menuNavOpen = document.querySelector("#menu-nav-open");
let menuNavClose = document.querySelector("#menu-nav-close");
let conNav = document.querySelector("nav");

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

menuNavOpen.addEventListener("click", () => {
  document.body.classList.add("no-scroll");
  conNav.style.display = "flex";
  menuNavOpen.style.display = "none";
  menuNavClose.style.display = "block";
});
menuNavClose.addEventListener("click", () => {
  document.body.classList.remove("no-scroll");
  conNav.style.display = "none";
  menuNavOpen.style.display = "block";
  menuNavClose.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 767) {
    conNav.style.display = "flex";
    menuNavOpen.style.display = "none";
    menuNavClose.style.display = "none";
  } else {
    conNav.style.display = "none";
    menuNavOpen.style.display = "block";
    menuNavClose.style.display = "none";
  }
});
