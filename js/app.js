const checkbox = document.querySelector('#checkbox')
const themes = {
  light: {
    '--bgToggle': 'hsl(230, 22%, 74%)',
    '--bgColor': 'hsl(0, 0%, 100%)',
    '--topPatternBg': 'hsl(225, 100%, 98%)',
    '--cardBg': 'hsl(227, 47%, 96%)',
    '--textPrimary': 'hsl(230, 17%, 14%)',
    '--textSecondary': 'hsl(228, 12%, 44%)',
  },
  dark: {
    '--bgToggle':
      'linear-gradient(to right, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%)',
    '--bgColor': 'hsl(230, 17%, 14%)',
    '--topPatternBg': 'hsl(232, 19%, 15%)',
    '--cardBg': 'hsl(228, 28%, 20%)',
    '--textPrimary': 'hsl(0, 0%, 100%)',
    '--textSecondary': 'hsl(228, 34%, 66%)',
  },
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  checkbox.setAttribute('checked', true)
}

checkbox.addEventListener('change', (event) => {
  event.target.checked
    ? setThemeProperties(themes.dark)
    : setThemeProperties(themes.light)
})

function setThemeProperties(props = {}) {
  for (const prop in props) {
    if (props.hasOwnProperty(prop))
      document.body.style.setProperty(prop, props[prop])
  }
}
