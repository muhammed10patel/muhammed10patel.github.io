document.addEventListener("DOMContentLoaded", function () {
  const galleries = document.querySelectorAll(".project-gallery"); // Select all galleries

  // Initialize PhotoViewer for all galleries
  galleries.forEach((gallery) => {
    const images = gallery.querySelectorAll("img"); // Select all images in the gallery

    images.forEach((image) => {
      image.addEventListener("click", function () {
        const imageList = Array.from(images).map((img) => ({
          src: img.src,
          title: img.getAttribute("data-title") || img.alt,
        }));

        new PhotoViewer(imageList, { index: Array.from(images).indexOf(image) });
      });
    });
  });

  // Handle toggle buttons separately
  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const galleryId = button.getAttribute("data-gallery"); // Get the target gallery ID
      const gallery = document.getElementById(galleryId); // Find the gallery
      if (!gallery) return; // Skip if gallery is not found

      const images = gallery.querySelectorAll("img"); // Select all images in the gallery
      let showWithAlternate = button.getAttribute("data-toggled") === "true"; // Get current toggle state

      images.forEach((image) => {
        const currentSrc = image.src;
        const altSrc = image.getAttribute("data-alt-src");
        image.src = showWithAlternate
          ? image.getAttribute("data-original-src") || currentSrc
          : altSrc;

        // Store the original src if not already stored
        if (!image.getAttribute("data-original-src")) {
          image.setAttribute("data-original-src", currentSrc);
        }
      });

      // Update toggle state and button text
      button.setAttribute("data-toggled", !showWithAlternate);
      button.textContent = showWithAlternate
        ? "Show Predictions"
        : "Remove Predictions";
    });
  });
});
