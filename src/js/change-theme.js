const refThemeSwitcher = document.querySelector('.theme-switch__toggle');
const refBody = document.body;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const getTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  savedTheme === Theme.DARK ? (refThemeSwitcher.checked = true) : '';
  refBody.className = savedTheme || Theme.LIGHT;
};

const changeTheme = () => {
  localStorage.setItem('theme', themeReplace());
  refBody.className = themeReplace();
};
const themeReplace = () =>
  refBody.className === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

getTheme();
refThemeSwitcher.addEventListener('click', changeTheme);
