/* ─────────────────────────────────────────
   main.js  –  Shared utilities for CodeTrack
   ───────────────────────────────────────── */

/* ── Simulated auth handlers (no backend) ── */

function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate login
    console.log('Login attempt:', { email });
    alert('Login successful! (simulated)');
    window.location.href = 'dashboard.html';
}

function handleRegister() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate registration
    console.log('Register attempt:', { name, email });
    alert('Account created! (simulated)');
    window.location.href = 'login.html';
}

/* ── Active sidebar link highlighting ── */

(function highlightActiveSidebarLink() {
    const links = document.querySelectorAll('.sidebar-link');
    if (!links.length) return;

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            links.forEach(function (l) { l.classList.remove('is-active'); });
            link.classList.add('is-active');
        });
    });
})();

/* ── Smooth scroll for anchor links ── */

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
