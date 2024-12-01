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
document.addEventListener("DOMContentLoaded", loadChoirs);
