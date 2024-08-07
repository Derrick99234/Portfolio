window.addEventListener("DOMContentLoaded", () => {
  /*=================== scroll section active link ===================*/
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".navbar a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          let navLink = document.querySelector(
            "header nav a[href*=" + id + "]"
          );
          if (navLink) {
            navLink.classList.add("active");
          } else {
            console.log("Element not found for section id: " + id);
          }
        });
      }
    });
  };

  /* ==============================  modal pop up  ===================== */
  const modalContainer = document.querySelectorAll(".modal-container");
  const close_modal = document.querySelectorAll(".close_modal");
  const webDevBtn = document.querySelectorAll("#modalBtn");

  webDevBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      //   container.classList.toggle("showModal");
      btn === webDevBtn[0]
        ? modalContainer[0].classList.add("showModal")
        : null;
      btn === webDevBtn[1]
        ? modalContainer[1].classList.add("showModal")
        : null;
      btn === webDevBtn[2]
        ? modalContainer[2].classList.add("showModal")
        : null;
    });
  });

  modalContainer.forEach((container) => {
    close_modal.forEach((btn) => {
      btn.addEventListener("click", () => {
        container.classList.remove("showModal");
      });
    });
  });

  /*==================== multiple text writing =========================*/

  const text = document.querySelector(".multi-text");

  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Full Stack Developer";
    }, 0);
    setTimeout(() => {
      text.textContent = "UI/UX Designer";
    }, 4000);
    setTimeout(() => {
      text.textContent = "Affiliate Marketer";
    }, 8000);
  };

  textLoad();
  setInterval(textLoad, 12000);
});

// const nav = document.querySelector(".navbar");
// const close_icon = document.querySelector("#close-icon");
// const menu = document.querySelector("#menu-icon");
// nav.addEventListener("click", () => {
//   nav.style.display = "none";
//   close_icon.style.display = "none";
//   menu.style.display = "block";
// });
