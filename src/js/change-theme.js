const refThemeSwitcher = document.querySelector('.theme-switch__toggle');
const refBody = document.body;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedTheme = localStorage.getItem('theme');
const getTheme = () => {
  savedTheme === Theme.DARK ? (refThemeSwitcher.checked = true) : '';
  refBody.className = savedTheme || Theme.LIGHT;
};

const changeTheme = () => {
  localStorage.setItem('theme', classReplace());
  refBody.className = classReplace();
};
const classReplace = () =>
  refBody.className === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

getTheme();
refThemeSwitcher.addEventListener('click', changeTheme);
