// Initial theme setup on page load
const key = "theme";
let stored: string | null = null;
try {
  stored = localStorage.getItem(key);
} catch {
  // ignore
}
if (stored === "dark" || stored === "light") {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(stored);
}
