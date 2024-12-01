document.addEventListener("DOMContentLoaded", () => {
    // Selectors for the modal and its elements
    const modal = document.getElementById("choir-modal");
    const modalContent = {
        name: document.getElementById("choir-name"),
        type: document.getElementById("choir-type"),
        location: document.getElementById("choir-location"),
        year: document.getElementById("choir-year"),
        website: document.getElementById("choir-website"),
    };
    const closeBtn = modal.querySelector(".close");

    // Function to open the modal with choir details
    const openModal = (choirData) => {
        modalContent.name.textContent = choirData.name;
        modalContent.type.textContent = `Type: ${choirData.type}`;
        modalContent.location.textContent = `Location: ${choirData.location}`;
        modalContent.year.textContent = `Year Established: ${choirData.year}`;
        modalContent.website.href = choirData.website;
        modalContent.website.textContent = "Visit Website";
        modal.classList.add("active");
    };

    // Function to close the modal
    const closeModal = () => {
        modal.classList.remove("active");
    };

    // Add event listeners to choir cards
    const cards = document.querySelectorAll(".choir-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const choirData = {
                name: card.dataset.choir,
                type: card.dataset.type,
                location: card.dataset.location,
                year: card.dataset.year,
                website: card.dataset.website,
            };
            openModal(choirData);
        });
    });

    // Add event listener to close button
    closeBtn.addEventListener("click", closeModal);

    // Add event listener to close modal when clicking outside content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
