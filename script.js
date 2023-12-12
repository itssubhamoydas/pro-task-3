// Add a smooth scrolling animation to the navigation links
const navLinks = document.querySelectorAll('nav a');

for (const navLink of navLinks) {
  navLink.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target.getAttribute('href');
    const targetElement = document.querySelector(target);

    if (targetElement) {
      const scrollTarget = targetElement.offsetTop - 80; // Adjust the offset to account for the header height
      window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth'
      });
    }
  });
}
