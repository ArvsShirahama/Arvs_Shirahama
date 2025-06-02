document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
    alert('Thank you for your message! This is a demo form.');
});