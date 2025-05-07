async function loadPart(id, url) {
    const res = await fetch(url);
    document.getElementById(id).innerHTML = await res.text();
}
loadPart('menu-placeholder', '../components/menu.html');
loadPart('menu-mobile-placeholder', '../components/menu-mobile.html');
loadPart('footer-placeholder', '../components/footer.html');

// Dark/Light mode toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
const lightIcon = document.getElementsByClassName('theme-toggle-light-icon');
const darkIcon = document.getElementsByClassName('theme-toggle-dark-icon');

// Update icon visibility
function updateToggleIcon() {
    const isDark = document.documentElement.classList.contains('dark');

    for (const icon of darkIcon) {
        icon.classList.toggle('hidden', isDark);
    }

    for (const icon of lightIcon) {
        icon.classList.toggle('hidden', !isDark);
    }
}
updateToggleIcon();

themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggleIcon();
});

mobileThemeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggleIcon();
});

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    console.log('Mobile menu button clicked');
    document.getElementById('mobile-menu').classList.toggle('hidden');
});