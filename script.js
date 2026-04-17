function isDesktop() {
    return window.matchMedia('(min-width: 769px)').matches;
}

const toggle = document.getElementById('mode-toggle');
const body = document.body;

toggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const darkMode = localStorage.getItem('darkMode');
    
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        toggle.checked = true;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger-button');
    const body = document.body;

    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', function() {
            body.classList.toggle('nav-open');
        });
    }
});
