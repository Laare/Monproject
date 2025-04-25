// Artisans Data
const artisans = [
    {
        id: 1,
        name: 'Jean Dupont',
        job: 'Plombier',
        rating: 4.5,
        reviews: 127,
        location: 'Paris',
        price: '50€/h',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
        id: 2,
        name: 'Marie Martin',
        job: 'Électricienne',
        rating: 5,
        reviews: 89,
        location: 'Lyon',
        price: 'Devis sur demande',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
        id: 3,
        name: 'Pierre Bernard',
        job: 'Menuisier',
        rating: 4.8,
        reviews: 156,
        location: 'Marseille',
        price: '45€/h',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
        id: 4,
        name: 'Sophie Lambert',
        job: 'Peintre',
        rating: 4.7,
        reviews: 92,
        location: 'Toulouse',
        price: '40€/h',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
];

// Load Artisans
function loadArtisans() {
    const artisansList = document.getElementById('artisans-list');
    artisansList.innerHTML = '';

    artisans.forEach(artisan => {
        const artisanCard = document.createElement('div');
        artisanCard.className = 'artisan-card';
        artisanCard.innerHTML = `
            <img src="${artisan.image}" alt="${artisan.name}" class="artisan-image">
            <div class="artisan-info">
                <h3 class="artisan-name">${artisan.name}</h3>
                <p class="artisan-job">${artisan.job}</p>
                <div class="artisan-rating">
                    <div class="stars">
                        ${'★'.repeat(Math.floor(artisan.rating))}${artisan.rating % 1 ? '½' : ''}${'☆'.repeat(5 - Math.ceil(artisan.rating))}
                    </div>
                    <span>(${artisan.reviews} avis)</span>
                </div>
                <div class="artisan-location">
                    <img src="https://api.iconify.design/lucide:map-pin.svg" alt="Location" width="16" height="16">
                    <span>${artisan.location}</span>
                </div>
                <p class="artisan-price">${artisan.price}</p>
            </div>
            <button class="btn-profile">Voir Profil</button>
        `;
        artisansList.appendChild(artisanCard);
    });
}

// Rating Filter
function setupRatingFilter() {
    const stars = document.querySelectorAll('.rating-filter .star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            selectedRating = rating === selectedRating ? 0 : rating;

            stars.forEach(s => {
                const r = parseInt(s.dataset.rating);
                s.classList.toggle('active', r <= selectedRating);
            });
        });
    });
}

// Sort Buttons
function setupSortButtons() {
    const sortBtns = document.querySelectorAll('.sort-btn');
    
    sortBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sortBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Implement sorting logic here
            const sortBy = btn.dataset.sort;
            console.log(`Sorting by: ${sortBy}`);
        });
    });
}

// Mobile Menu
function setupMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenu?.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadArtisans();
    setupRatingFilter();
    setupSortButtons();
    setupMobileMenu();
});