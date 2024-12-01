// Directory to load choir JSON files
const choirDirectory = 'choirs';

// Select elements
const choirsContainer = document.querySelector(".choirs");

// Function to load choirs dynamically
async function loadChoirs() {
    try {
        // Fetch list of choir JSON files
        const response = await fetch(`${choirDirectory}/index.json`);
        const choirFiles = await response.json();

        // Loop through choir files and fetch their data
        for (const file of choirFiles) {
            const choirResponse = await fetch(`${choirDirectory}/${file}`);
            const choirData = await choirResponse.json();
            addChoirToPage(choirData);
        }
    } catch (error) {
        console.error("Error loading choirs:", error);
    }
}


// Function to add a choir to the page
function addChoirToPage(choir) {
    const choirElement = document.createElement("div");
    choirElement.classList.add("choir");

    choirElement.innerHTML = `
        <img src="assets/images/placeholder.jpg" alt="${choir.name}">
        <h3>${choir.name}</h3>
        <p>${choir.location}</p>
    `;

    // Add click event to show modal
    choirElement.addEventListener("click", () => {
        const modal = document.getElementById("choir-modal");
        const choirName = document.getElementById("choir-name");
        choirName.textContent = choir.name;
        modal.classList.remove("hidden");
    });

    choirsContainer.appendChild(choirElement);
}

// Load choirs on page load
document.addEventListener("DOMContentLoaded", function () {
    // Select modal elements
    const modal = document.getElementById("choir-modal"); // Modal container
    const choirName = document.getElementById("choir-name"); // Element inside modal to show choir name
    const closeModal = modal.querySelector(".close"); // Close button inside the modal

    // Add event listeners to each choir element
    document.querySelectorAll(".choir").forEach((choir) => {
        choir.addEventListener("click", () => {
            const name = choir.querySelector("h3").textContent; // Get the name from the clicked choir card
            choirName.textContent = name; // Update the modal with the choir name
            modal.classList.remove("hidden"); // Show the modal by removing the 'hidden' class
        });
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden"); // Add the 'hidden' class to hide the modal
    });

    // Close the modal if clicked outside the modal content
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden"); // Add 'hidden' to close the modal
        }
    });
});
