function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

  function scrollLeft() {
    const carousel = document.querySelector('.carousel');
    const itemWidth = carousel.querySelector('.carousel-item').clientWidth;
    carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  }
  function scrollRight() {
    const carousel = document.querySelector('.carousel');
    const itemWidth = carousel.querySelector('.carousel-item').clientWidth;
    carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
  }
