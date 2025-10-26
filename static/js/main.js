// Set darkmode
document.getElementById('mode').addEventListener('click', () => {

    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    document.body.classList.toggle('dark'); // Keep for backwards compat with old dark mode styles
    localStorage.setItem('theme', newTheme);

});

// enforce local storage setting but also fallback to user-agent preferences
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia("(prefers-color-scheme: dark)").matches)) {

  document.documentElement.setAttribute('data-bs-theme', 'dark');
  document.body.classList.add('dark'); // Keep for backwards compat with old dark mode styles

}
