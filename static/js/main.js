// Set darkmode
document.getElementById('mode').addEventListener('click', () => {

    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    document.body.classList.toggle('dark'); // Keep for backwards compat with old dark mode styles
    localStorage.setItem('theme', newTheme);

});

// Only go dark if the user has explicitly chosen dark — default is always light
if (localStorage.getItem('theme') === 'dark') {

  document.documentElement.setAttribute('data-bs-theme', 'dark');
  document.body.classList.add('dark'); // Keep for backwards compat with old dark mode styles

}
