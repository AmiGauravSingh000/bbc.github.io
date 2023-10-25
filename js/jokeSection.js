// Define your categories here
const categories = [
    { id: 'cat1', name: 'Category 1' },
    { id: 'cat2', name: 'Category 2' },
    { id: 'cat3', name: 'Category 3' },
    { id: 'cat3', name: 'Category 4' }
];

function toggleCategoryDropdown() {
    const categoryDropdown = document.getElementById('categoryDropdown');
    categoryDropdown.classList.toggle('show');

    // Populate the dropdown with category links
    const dropdownContent = document.getElementById('categoryDropdown');
    dropdownContent.innerHTML = '';
    categories.forEach((category) => {
        const categoryLink = document.createElement('a');
        categoryLink.href = '#';
        categoryLink.textContent = category.name;
        categoryLink.onclick = () => selectCategory(category.id);
        dropdownContent.appendChild(categoryLink);
    });
}

function selectCategory(category) {
    const jokeSections = document.querySelectorAll('.joke-list');

    jokeSections.forEach((section) => {
        section.style.display = 'none';
    });

    const selectedJokeSection = document.getElementById(category);
    selectedJokeSection.style.display = 'block';

    const categoryButton = document.getElementById('category-button');
    // Find the category name by its id
    const selectedCategory = categories.find((cat) => cat.id === category);
    categoryButton.textContent = selectedCategory.name;

    toggleCategoryDropdown();
}

// Close the category dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
