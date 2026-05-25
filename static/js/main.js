// Set darkmode
document.getElementById('mode').addEventListener('click', () => {

    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    document.body.classList.toggle('dark'); // Keep for backwards compat with old dark mode styles
    localStorage.setItem('theme', newTheme);

});

// Instagram embed expand/collapse
document.querySelectorAll('.embed-expand-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const embed = btn.previousElementSibling;
    if (embed && embed.classList.contains('community-embed-instagram')) {
      embed.classList.toggle('expanded');
      btn.textContent = embed.classList.contains('expanded') ? 'Show less' : 'See full post';
    }
  });
});

// Only go dark if the user has explicitly chosen dark — default is always light
if (localStorage.getItem('theme') === 'dark') {

  document.documentElement.setAttribute('data-bs-theme', 'dark');
  document.body.classList.add('dark'); // Keep for backwards compat with old dark mode styles

}
