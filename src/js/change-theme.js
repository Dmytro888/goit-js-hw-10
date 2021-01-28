const refThemeSwitcher = document.querySelector('.theme-switch__toggle');
const bodyTheme = document.body;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedTheme = localStorage.getItem('theme');

const changeTheme = () => {
  localStorage.setItem('theme', classReplace());
  bodyTheme.className = classReplace();
};
const classReplace = () =>
  bodyTheme.className === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

savedTheme === Theme.DARK ? (refThemeSwitcher.checked = true) : '';
bodyTheme.className = savedTheme || Theme.LIGHT;

refThemeSwitcher.addEventListener('click', changeTheme);
