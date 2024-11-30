// Modal Functionality
const modal = document.getElementById('choir-modal');
const modalContent = {
    name: document.getElementById('choir-name'),
    image: document.getElementById('choir-image'),
    description: document.getElementById('choir-description'),
};
const closeBtn = document.querySelector('.close');

// Open Modal
document.querySelectorAll('.choir').forEach(choir => {
    choir.addEventListener('click', () => {
        modalContent.name.textContent = choir.querySelector('h3').textContent;
        modalContent.image.src = choir.querySelector('img').src;
        modalContent.description.textContent = `Detailed information about ${modalContent.name.textContent}`;
        modal.classList.remove('hidden');
    });
});

// Close Modal
closeBtn.addEventListener('click', () => modal.classList.add('hidden'));

// Filter Functionality
document.getElementById('location-filter').addEventListener('change', filterChoirs);
document.getElementById('type-filter').addEventListener('change', filterChoirs);

function filterChoirs() {
    const location = document.getElementById('location-filter').value;
    const type = document.getElementById('type-filter').value;

    document.querySelectorAll('.choir').forEach(choir => {
        const matchesLocation = !location || choir.dataset.location === location;
        const matchesType = !type || choir.dataset.type === type;
        choir.style.display = matchesLocation && matchesType ? 'block' : 'none';
    });
}
