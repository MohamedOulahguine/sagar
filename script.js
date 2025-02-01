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

//.......................work section

for (let i = 0; i < 3; i++) {
  // Select the container where projects will be appended
  let projectElement = document.querySelector(".projects");

  // Create the main project article element
  let createContentPrjct = document.createElement("article");
  createContentPrjct.className = "project";

  // Create the figure element for the project image
  let createContentPrjctImg = document.createElement("figure");
  createContentPrjctImg.className = "project__img";

  // Create the image element and set its attributes
  let createPrjctImg = document.createElement("img");
  createPrjctImg.src = "images/project-fiskil.png";
  createPrjctImg.alt = "project-fiskil";

  // Create the container for project information
  let createContentPrjctInfo = document.createElement("div");
  createContentPrjctInfo.className = "card__content";

  // Create the project title element
  let createContentPrjctTitle = document.createElement("h1");
  createContentPrjctTitle.className = "card__title";
  createContentPrjctTitle.innerHTML = "Fiskil";

  // Create the project description element
  let createContentPrjctDesc = document.createElement("p");
  createContentPrjctDesc.className = "card__description";
  createContentPrjctDesc.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.";

  // Create the link to GitHub
  let createLinktoGit = document.createElement("a");
  createLinktoGit.href = "https://github.com/MohamedOulahguine";
  createLinktoGit.target = "_blank";
  createLinktoGit.innerHTML =
    '<i class="fa-solid fa-arrow-up-right-from-square"></i>';

  // Create the unordered list for skills
  let createUlForSkills = document.createElement("ul");
  createUlForSkills.className = "card__skills";

  // Append all elements to their respective parents
  projectElement.appendChild(createContentPrjct);
  createContentPrjct.appendChild(createContentPrjctImg);
  createContentPrjct.appendChild(createContentPrjctInfo);
  createContentPrjctImg.appendChild(createPrjctImg);
  createContentPrjctInfo.appendChild(createContentPrjctTitle);
  createContentPrjctInfo.appendChild(createContentPrjctDesc);
  createContentPrjctInfo.appendChild(createUlForSkills);
  createContentPrjctInfo.appendChild(createLinktoGit);

  // List of skills to be displayed
  let listForSkills = [
    "react",
    "next.js",
    "typescript",
    "nest.js",
    "postgreSQl",
    "tailwindcss",
    "figma",
    "cypress",
    "storybook",
    "git",
  ];

  // Loop through the list of skills and create list items for each
  for (let j = 0; j < listForSkills.length; j++) {
    let createLiForSkill = document.createElement("li");
    createLiForSkill.className = "skill";
    createLiForSkill.innerHTML = listForSkills[j];
    createUlForSkills.appendChild(createLiForSkill);
  }
}

//.......................Testimonials section

for (let i = 0; i < 3; i++) {
  // Select the container where Testimonials will be appended
  let TestimonialsElement = document.querySelector(".Testimonials");

  // Create the main Testimonials element
  let createConTestimonials = document.createElement("div");
  createConTestimonials.className = "card__Testimonials";

  // Create the element for the Testimonials image
  let createContentTestimonialsImg = document.createElement("div");
  createContentTestimonialsImg.className = "img__Testimonial";
  createContentTestimonialsImg.innerHTML = '<i class="fa-solid fa-user"></i>';

  // Create the container for Testimonials information
  let createContentTestimonialsDesc = document.createElement("p");
  createContentTestimonialsDesc.className = "card__description";
  let cardDescription = [
    `“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”`,
    `“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”`,
    `“Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”`,
  ];
  createContentTestimonialsDesc.innerHTML = cardDescription[i];

  let createContentTestimonialsTitle = document.createElement("div");
  createContentTestimonialsTitle.className = "card__title";

  // Create the Testimonials name element
  let createTestimonialsTitle = document.createElement("h1");
  createTestimonialsTitle.className = "card__name";
  createTestimonialsTitle.innerHTML = "john doe";

  let cardSpan = [`Founder - xyz.com`, `Founder - abc.com`, `Freelancer`];
  let createTestimonialsTitleSpan = document.createElement("span");
  createTestimonialsTitleSpan.className = "card__span";
  createTestimonialsTitleSpan.innerHTML = cardSpan[i];

  // Append all elements to their respective parents
  TestimonialsElement.appendChild(createConTestimonials);
  createConTestimonials.appendChild(createContentTestimonialsImg);
  createConTestimonials.appendChild(createContentTestimonialsDesc);
  createConTestimonials.appendChild(createContentTestimonialsTitle);
  createContentTestimonialsTitle.appendChild(createTestimonialsTitle);
  createContentTestimonialsTitle.appendChild(createTestimonialsTitleSpan);
}
