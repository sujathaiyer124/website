// Function to toggle the main menu
function toggleMenu() {
    const menu = document.querySelector('.top-menu-ul');
    menu.classList.toggle('active');
}

// Function to toggle the submenu
function toggleSubMenu(event) {
    event.stopPropagation(); // Prevent closing the main menu
    const submenu = event.target.closest('.menu-items').querySelector('.sub-menu');
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}

// Close menu on clicking outside
document.addEventListener('click', () => {
    const menu = document.querySelector('.top-menu-ul');
    const hamburger = document.querySelector('.hamburger');

    // Check if the click is on the hamburger icon
    if (hamburger.contains(event.target)) {
        // Toggle the 'active' class to show/hide the menu
        menu.classList.toggle('active');
    } else if (!menu.contains(event.target)) {
        // Close the menu if clicked outside
        menu.classList.remove('active');
    }

    const submenus = document.querySelectorAll('.sub-menu');
    submenus.forEach(submenu => submenu.style.display = 'none');
});
