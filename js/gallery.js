const images = document.querySelectorAll('img');

images.forEach(image => {
        const imageSrc = image.src;

        // Open the image in a new tab when clicked
        image.addEventListener('click', () => {
                window.open(imageSrc, '_blank');
        });
});
