document.addEventListener('DOMContentLoaded', function () {
    const galleries = document.querySelectorAll('.project-gallery'); // Select all galleries

    galleries.forEach((gallery) => {
        const images = gallery.querySelectorAll('img'); // Select all images in the gallery

        images.forEach((image) => {
            image.addEventListener('click', function () {
                const imageList = Array.from(images).map(img => ({
                    src: img.src,
                    title: img.getAttribute('data-title') || img.alt,
                }));

                new PhotoViewer(imageList, { index: Array.from(images).indexOf(image) });
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');
  
    toggleButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-target');
        const altSrc = button.getAttribute('data-alt-src');
        const image = document.getElementById(targetId);
  
        if (image) {
          const currentSrc = image.src;
          image.src = altSrc;
          button.setAttribute('data-alt-src', currentSrc);
        }
      });
    });
  });
  