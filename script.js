// Sample data
const learningItems = [
    "JavaScript",
    "HTML & CSS",
    "React"
];

const books = [
];

// Function to add items to a list
function populateList(items, listId) {
    const list = document.getElementById(listId);
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

// Populate lists when the page loads
window.onload = function() {
    populateList(learningItems, 'learning-list');
    populateList(books, 'book-list');
};

// You can add more functions here, such as adding new blog posts, learning items, or books
