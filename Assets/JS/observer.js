document.addEventListener("DOMContentLoaded", function () {
  /*===============  Hero Section  ===================*/
  const heroSection = document.getElementById("home");
  const heroContent = document.getElementById("fade-in-left");
  const heroImg = document.querySelector(".home-img");

  /*==================  About Section  ==========================*/
  const aboutSection = document.getElementById("about");
  const aboutImg = document.querySelector(".about-img");
  const aboutContent = document.querySelector(".about-content");

  /*==================  services Section  ==========================*/
  const serviceSection = document.getElementById("services");
  const serviceBox = document.querySelectorAll(".service-box");
  const options = {
    rootMargin: "0px",
    threshold: 0.1,
  };

  const callBackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "home") {
          heroContent.classList.add("loader");
          heroImg.classList.add("fade-up");
        }
        if (entry.target.id === "about") {
          aboutImg.classList.add("loader");
          aboutContent.classList.add("fade-up");
        }
        if (entry.target.id === "services") {
          serviceBox.forEach((box) => {
            box.classList.add("stagger");
          });
        }
      }
    });
  };

  const observer = new IntersectionObserver(callBackFunction, options);

  observer.observe(heroSection);
  observer.observe(aboutSection);
  observer.observe(serviceSection);
});
