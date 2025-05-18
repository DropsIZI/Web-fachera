// filepath: gamer-mural/src/app.js
document.addEventListener('DOMContentLoaded', () => {
    const clipsContainer = document.getElementById('clips-container');
    const imagesContainer = document.getElementById('images-container');

    // Function to load clips
    function loadClips() {
        const clips = [
            'clips/clip1.mp4',
            'clips/clip2.mp4',
            'clips/clip3.mp4'
        ];

        clips.forEach(clip => {
            const videoElement = document.createElement('video');
            videoElement.src = clip;
            videoElement.controls = true;
            videoElement.classList.add('clip');
            clipsContainer.appendChild(videoElement);
        });
    }

    // Function to load images
    function loadImages() {
        const images = [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg'
        ];

        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.classList.add('funny-image');
            imagesContainer.appendChild(imgElement);
        });
    }

    loadClips();
    loadImages();
});