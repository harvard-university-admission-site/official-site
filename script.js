document.getElementById('applyBtn').addEventListener('click', function() {
    alert('Merci de votre intérêt ! Vous serez redirigé vers la page de candidature.');
    // Ici, vous pouvez rediriger vers la page de candidature
    // window.location.href = 'page-de-candidature.html';
});
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.testimonial-container blockquote');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Boucle vers le dernier témoignage
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Boucle vers le premier témoignage
    }

    const offset = -currentSlide * 100; // Défilement basé sur le nombre de slides
    document.querySelector('.testimonial-container').style.transform = `translateX(${offset}%)`;
}