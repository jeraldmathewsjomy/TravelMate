document.querySelectorAll('.icon.arrow').forEach(function(arrow) {
    arrow.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('onclick').split("'")[1]).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




const searchInput = document.getElementById('search');
const dropdown = document.getElementById('dropdown');

// Array of local HTML pages
const data = [
    { name: 'Austria', path: 'austria.html' },
    { name: 'Brazil', path: 'brazil.html' },
    { name: 'Canada', path: 'canada.html' },
    { name: 'Argentina', path: 'argentina.html' },
    { name: 'Australia', path: 'australia.html' },
    { name: 'China', path: 'china.html' },
    { name: 'Czech Republic', path: 'czechrepublic.html' },
    { name: 'Egypt', path: 'egypt.html' },
    { name: 'France', path: 'france.html' },
    { name: 'Germany', path: 'germany.html' },
    { name: 'Greece', path: 'greece.html' },
    { name: 'Iceland', path: 'iceland.html' },
    { name: 'India', path: 'india.html' },
    { name: 'Italy', path: 'italy.html' },
    { name: 'Japan', path: 'japan.html' },
    { name: 'Kenya', path: 'kenya.html' },
    { name: 'Malaysia', path: 'malaysia.html' },
    { name: 'Mexico', path: 'mexico.html' },
    { name: 'Morocco', path: 'morocco.html' },
    { name: 'Netherlands', path: 'netherlands.html' },
    { name: 'New Zealand', path: 'newzealand.html' },
    { name: 'Norway', path: 'norway.html' },
    { name: 'Peru', path: 'peru.html' },
    { name: 'Portugal', path: 'portugal.html' },
    { name: 'Russia', path: 'russia.html' },
    { name: 'South Africa', path: 'southafrica.html' },
    { name: 'Spain', path: 'spain.html' },
    { name: 'Switzerland', path: 'switzerland.html' },
    { name: 'Tanzania', path: 'tanzania.html' },
    { name: 'Thailand', path: 'thailand.html' },
    { name: 'Turkey', path: 'turkey.html' },
    { name: 'United Arab Nations', path: 'unitedarabnations.html' },
    { name: 'United Kongdom', path: 'unitedkingdom.html' },
    { name: 'United States', path: 'unitedstates.html' },
    { name: 'Vietnam', path: 'vietnam.html' },
    
];

document.getElementById('search-icon').addEventListener('click', function() {
    navigateToPage();
});

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        navigateToPage();
    }
});

// Function to navigate to the corresponding page
function navigateToPage() {
    const searchText = searchInput.value.toLowerCase();
    const matchedItem = data.find(item => item.name.toLowerCase() === searchText);

    if (matchedItem) {
        // Exact match found, navigate to that page
        window.location.href = matchedItem.path;
    } else {
        // No exact match, navigate to the first item in the dropdown if available
        const firstDropdownItem = dropdown.querySelector('a');
        if (firstDropdownItem) {
            window.location.href = firstDropdownItem.href;
        } else {
            alert('No matching destination found!');
        }
    }
}

function filterFunction() {
    const filter = searchInput.value.toLowerCase();
    dropdown.innerHTML = '';
    if (filter) {
        const filteredData = data.filter(item => item.name.toLowerCase().includes(filter));
        filteredData.forEach(item => {
            const a = document.createElement('a');
            a.href = item.path;
            a.textContent = item.name;
            dropdown.appendChild(a);
        });
    }
}
