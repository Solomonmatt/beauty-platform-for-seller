function updateLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(data-${lang});
  });
}

// On selector change
document.getElementById('languageSelector').addEventListener('change', function () {
  updateLanguage(this.value);
});

// On page load, set default language
window.addEventListener('DOMContentLoaded', () => {
  const defaultLang = document.getElementById('languageSelector').value;
  updateLanguage(defaultLang);
});