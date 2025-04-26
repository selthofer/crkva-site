// Simple bilingual toggle for all elements with data-en and data-sr attributes

function setLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(lang === 'sr' ? 'data-sr' : 'data-en');
    });
    // For input placeholders, etc. (if needed)
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
        el.placeholder = el.getAttribute(lang === 'sr' ? 'data-sr-placeholder' : 'data-en-placeholder');
    });
    // Save preference
    localStorage.setItem('lang', lang);
}

// On page load, set language from localStorage or default to Serbian
document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'sr';
    setLanguage(lang);
});