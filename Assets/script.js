/*=================== scroll section active link ===================*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

/* ==============================  modal pop up  ===================== */
const modalContainer = document.querySelectorAll(".modal-container");
const webDevBtn = document.querySelectorAll("#modalBtn");

webDevBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    //   container.classList.toggle("showModal");
    btn === webDevBtn[0]
      ? modalContainer[0].classList.toggle("showModal")
      : null;
    btn === webDevBtn[1]
      ? modalContainer[1].classList.toggle("showModal")
      : null;
    btn === webDevBtn[2]
      ? modalContainer[2].classList.toggle("showModal")
      : null;
  });
});

modalContainer.forEach((container) => {
  container.addEventListener("click", () => {
    container.classList.remove("showModal");
  });
});

/*==================== display header after scroll =========================*/
const header = document.querySelector(".about-header");
const nav = document.querySelector(".header");

// console.log(header);

window.onscroll = () => {
  // window.scrollY === 300 ? console.log("hello") : null;
  if (window.scrollY > header.scrollHeight) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
  // console.log(window.scrollY);
};

/*==================== multiple text writing =========================*/

const text = document.querySelector(".multi-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Frontend Web Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "UI/UX Designer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Affiliate Marketer";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000)
