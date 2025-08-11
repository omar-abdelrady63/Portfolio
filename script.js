  const navbar = document.querySelector(".navbar");
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      backToTopBtn.style.display = "flex";
    } else {
        navbar.classList.remove("scrolled");
        backToTopBtn.style.display = "none";
    }})

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });