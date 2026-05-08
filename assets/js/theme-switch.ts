const LOCALSTORAGE_KEY = "theme";
const USER_PREFERS_DARK =
  window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

function getTheme(): Theme {
  try {
    const storedTheme = localStorage.getItem(LOCALSTORAGE_KEY) as Theme | null;
    if (storedTheme === Theme.DARK || storedTheme === Theme.LIGHT)
      return storedTheme;
  } catch {
    // ignore
  }
  return USER_PREFERS_DARK ? Theme.DARK : Theme.LIGHT;
}

function setTheme(theme: Theme) {
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, theme);
  } catch {
    // ignore
  }
  const root = document.documentElement;
  root.dataset.theme = theme;
}

class ThemeSwitch extends HTMLElement {
  connectedCallback() {
    this.addEventListener("click", () => {
      setTheme(getTheme() === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    });
  }
}

customElements.define("theme-switch", ThemeSwitch);
