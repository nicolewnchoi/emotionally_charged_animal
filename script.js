document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper for thumbnails
    var productThumb = new Swiper('.small-image', {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });

    // Initialize Swiper for main product images
    var productBig = new Swiper('.big-image', {
        loop: true,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: productThumb, // Link with thumbnails
        },
    });

    // Handle product type changes
    const productForm = document.getElementById("product-form");
    const bigImageWrapper = document.querySelector(".big-image .swiper-wrapper");
    const smallImageWrapper = document.querySelector(".small-image .swiper-wrapper");

    productForm.addEventListener("change", (event) => {
        const selectedRadio = event.target;
        if (selectedRadio.name === "breed") {
            const selectedImages = JSON.parse(selectedRadio.dataset.images);

            // Clear existing slides
            bigImageWrapper.innerHTML = '';
            smallImageWrapper.innerHTML = '';

            // Add new slides for each image
            selectedImages.forEach(image => {
                bigImageWrapper.innerHTML += `
                    <div class="swiper-slide">
                        <a data-fslightbox href="${image}">
                            <img src="${image}" alt="Product view">
                        </a>
                    </div>
                `;
                smallImageWrapper.innerHTML += `
                    <div class="swiper-slide">
                        <img src="${image}" alt="Thumbnail">
                    </div>
                `;
            });

            // Reinitialize Swiper instances
            productThumb.update();
            productBig.update();

            // Re-link thumbnail Swiper to main Swiper
            productBig.thumbs.swiper = productThumb;

            // Refresh lightbox
            refreshFsLightbox();
        }
    });
});
