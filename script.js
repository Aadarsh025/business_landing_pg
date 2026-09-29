document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  const closeNav = () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu after a nav link is tapped
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close menu if the viewport is resized back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeNav();
  });

  /* ---------- Contact form validation ---------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  const validators = {
    name: value => value.trim().length >= 2,
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    phone: value => value.trim() === '' || /^[0-9+\-\s()]{7,20}$/.test(value.trim()),
    message: value => value.trim().length >= 10,
  };

  const setFieldState = (field, isValid) => {
    const row = field.closest('.form-row');
    row.classList.toggle('is-invalid', !isValid);
  };

  const validateField = (field) => {
    const rule = validators[field.name];
    if (!rule) return true;
    const isValid = rule(field.value);
    setFieldState(field, isValid);
    return isValid;
  };

  // Validate on blur, and re-validate live once a field has been touched
  ['name', 'email', 'phone', 'message'].forEach(id => {
    const field = document.getElementById(id);
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.closest('.form-row').classList.contains('is-invalid')) {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = ['name', 'email', 'phone', 'message'].map(id => document.getElementById(id));
    const allValid = fields.map(validateField).every(Boolean);

    if (!allValid) {
      status.textContent = 'Please fix the highlighted fields and try again.';
      status.classList.remove('is-success');
      fields.find(f => f.closest('.form-row').classList.contains('is-invalid'))?.focus();
      return;
    }

    // No backend wired up yet — simulate a successful send.
    status.textContent = `Thanks, ${document.getElementById('name').value.trim().split(' ')[0]} — we'll reply within one business day.`;
    status.classList.add('is-success');
    form.reset();
  });

  /* ---------- Sticky nav shadow on scroll ---------- */
  const nav = document.getElementById('nav');
  const toggleNavShadow = () => {
    nav.style.boxShadow = window.scrollY > 8 ? '0 4px 16px rgba(20,23,28,0.06)' : 'none';
  };
  window.addEventListener('scroll', toggleNavShadow, { passive: true });
  toggleNavShadow();

});
  /* ---------- Dark theme toggle ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  themeToggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });