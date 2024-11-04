document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah reload halaman
    alert('Makasih Bang');

    event.target.reset();
});
