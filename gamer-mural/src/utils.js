function fetchClips() {
    // Function to fetch video clips from the public/clips directory
    return fetch('/clips')
        .then(response => response.json())
        .catch(error => console.error('Error fetching clips:', error));
}

function fetchImages() {
    // Function to fetch images from the public/images directory
    return fetch('/images')
        .then(response => response.json())
        .catch(error => console.error('Error fetching images:', error));
}

function formatClipData(clip) {
    // Function to format clip data for display
    return {
        title: clip.title || 'Untitled Clip',
        url: clip.url || '',
        description: clip.description || 'No description available.'
    };
}

function formatImageData(image) {
    // Function to format image data for display
    return {
        title: image.title || 'Untitled Image',
        url: image.url || '',
        description: image.description || 'No description available.'
    };
}