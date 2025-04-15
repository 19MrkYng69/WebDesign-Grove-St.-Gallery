document.addEventListener("DOMContentLoaded", function () {
  // LIGHTBOX FUNCTIONALITY
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

if (lightbox && lightboxImage) {
  const images = document.querySelectorAll(".lightbox-trigger");

  images.forEach(image => {
    image.addEventListener("click", function () {
        lightboxImage.src = this.src;
        lightboxImage.classList.add("enlarged");
        lightbox.classList.add("visible");
    });
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target !== lightboxImage) {
      lightbox.classList.remove("visible");
      lightboxImage.classList.remove("enlarged");
    }
  });
}

  // CONTACT FORM CONFIRMATION
  const form = document.getElementById("contactForm");
  const responseDiv = document.getElementById("form-response");

  if (form && responseDiv) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission

      // Display message to user
      responseDiv.innerText = "***Thanks for your interest in Grove St. Gallery. *** We will be in touch soon!";
      responseDiv.style.color = "#F4AF1B";
      responseDiv.style.fontWeight = "bold";
      responseDiv.style.marginTop = "20px";

      // Clear form fields
      form.reset();
    });
  }
});
