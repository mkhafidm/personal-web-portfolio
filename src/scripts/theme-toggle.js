export function initializeTheme() {
  // This function should ideally run once to set up the theme and listeners.
  // If ThemeToggle components are numerous, this might need adjustment
  // or be called from a single place.

  const applyTheme = () => {
    const userTheme = localStorage.getItem('theme');
    // Default to dark mode unless the user explicitly chose light.
    const useDark = userTheme === 'dark' || userTheme === null;
    if (useDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  applyTheme(); // Apply theme on script load

  // Setup for all buttons with the class.
  // This assumes this script is loaded once for the page.
  const themeToggleButtons = document.querySelectorAll('.theme-toggle-btn');
  themeToggleButtons.forEach(button => {
    if (!button.hasAttribute('data-theme-listener-attached')) {
      button.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        // No need to call applyTheme() here as classList.toggle handles the visual change.
      });
      button.setAttribute('data-theme-listener-attached', 'true');
    }
  });
}

// Initialize when the script is loaded if DOM is ready, or wait for DOMContentLoaded.
// This ensures it runs even if the script is deferred or loaded asynchronously.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTheme);
} else {
  initializeTheme();
}
