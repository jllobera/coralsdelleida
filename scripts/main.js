// Select modal elements
const modal = document.getElementById("choir-modal"); // The modal container
const choirName = document.getElementById("choir-name"); // The element for the choir name inside the modal
const closeModal = modal.querySelector(".close"); // The close button inside the modal

// Add event listeners to choir elements
document.querySelectorAll(".choir").forEach((choir) => {
    choir.addEventListener("click", () => {
        const name = choir.querySelector("h3").textContent; // Extract the choir name from the clicked card
        choirName.textContent = name; // Update the modal content with the choir name
        modal.classList.remove("hidden"); // Show the modal by removing the 'hidden' class
    });
});

// Close modal when the close button is clicked
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden"); // Add the 'hidden' class to hide the modal
});

// Close modal when clicking outside the modal content
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden"); // Add the 'hidden' class if clicked outside modal content
    }
});
