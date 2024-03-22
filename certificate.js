function openImage(imageUrl) {
    const fullscreenModal = document.getElementById("fullscreen-modal");
    const fullscreenImage = document.getElementById("fullscreen-image");
    
    if (!fullscreenModal.style.display || fullscreenModal.style.display === "none") {
        // Only open in fullscreen if it's not already open
        fullscreenImage.src = imageUrl;
        fullscreenModal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent scrolling while modal is open
    }
}

function closeImage() {
    const fullscreenModal = document.getElementById("fullscreen-modal");
    fullscreenModal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
}

// Add a popstate event listener to handle back button press
window.addEventListener("popstate", function(event) {
    // Check if the history state is null (indicating back button press)
    if (event.state === null) {
        // Redirect to index.html
        window.location.href = "certificate.html";
    }
});
    