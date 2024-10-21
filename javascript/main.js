  /* sticy navbar */
  window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});


/* Filterable Cards */

let list = document.querySelectorAll('.list');
let card = document.querySelectorAll('.card');

for(let i = 0; i<list.length; i++){
  list[i].addEventListener('click',function(){
    for(let j=0; j<list.length; j++){
        list[j].classList.remove('active');

    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');

    for(let k=0; k<card.length; k++)

      {
        card[k].classList.remove('active');
        card[k].classList.add('hide');

        if(card[k].getAttribute('data-item') == dataFilter || dataFilter == 'all' ){
          card[k].classList.remove('hide');
          card[k].classList.add('active');
          
        }
      }
  })
}

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Sample data (replace with your actual parts data)
const parts = [
    { name: 'gt 740', id: 'gt740' },
    { name: 'amd 7850', id: 'amd7850' },
    { name: 'gtx 550 ti', id: 'gtx550ti' },
    { name: 'gtx 1050 ti', id: 'gtx1050ti' },
    // Add more parts as needed
];

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredParts = parts.filter(part => part.name.toLowerCase().includes(searchTerm));
    
    displayResults(filteredParts);
});

function displayResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length > 0) {
        results.forEach(part => {
            const div = document.createElement('div');
            div.classList.add('search-result-item');
            div.textContent = part.name;
            div.addEventListener('click', () => {
                scrollToPart(part.id);
                searchResults.style.display = 'none';
            });
            searchResults.appendChild(div);
        });
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
}

function scrollToPart(partId) {
    const element = document.getElementById(partId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Element with id "${partId}" not found`);
        // Fallback: scroll to the games section
        const gamesSection = document.querySelector('.games');
        if (gamesSection) {
            gamesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Hide search results when clicking outside
document.addEventListener('click', function(event) {
    if (!searchResults.contains(event.target) && event.target !== searchInput) {
        searchResults.style.display = 'none';
    }
});

// Swiper initialization
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// Fade-in animation
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('appear');
        } else {
            element.classList.remove('appear');
        }
    });
}

// Initial check on page load
document.addEventListener('DOMContentLoaded', () => {
    fadeInOnScroll();
});

// Check on scroll
window.addEventListener('scroll', () => {
    fadeInOnScroll();
});




// Toggle menu functionality
const toggleMenu = document.querySelector('.toggleMenu');
const nav = document.querySelector('.nav');

toggleMenu.addEventListener('click', function() {
    toggleMenu.classList.toggle('active');
    nav.classList.toggle('active');
});
