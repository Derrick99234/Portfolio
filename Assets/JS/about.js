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