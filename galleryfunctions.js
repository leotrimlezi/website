// JavaScript to open the lightbox and display the clicked photo or video
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxVideo = document.getElementById("lightbox-video");
    const closeBtn = document.getElementById("close-lightbox");

    // Function to open the lightbox with the clicked image or video
    function openLightbox(mediaUrl, isVideo) {
        lightbox.style.display = "flex";

        if (isVideo) {
            lightboxImage.style.display = "none";
            lightboxVideo.style.display = "block";
            lightboxVideo.src = mediaUrl;
        } else {
            lightboxVideo.style.display = "none";
            lightboxImage.style.display = "block";
            lightboxImage.src = mediaUrl;
        }
    }

    // Function to close the lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxImage.src = ""; // Clear the image/video source
        lightboxVideo.src = "";
    });

    // Add event listeners to images
    const galleryImages = document.querySelectorAll(".gallery-image");
    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            openLightbox(image.src, false);
        });
    });

    // Add event listeners to videos
    const galleryVideos = document.querySelectorAll(".gallery-video");
    galleryVideos.forEach(video => {
        video.addEventListener("click", () => {
            openLightbox(video.querySelector("source").src, true);
        });
    });
});