/* Apply the saved palette before paint, including on case-study pages. */
const preferenceStorage = {
  getItem(key) { try { return localStorage.getItem(key); } catch { return null; } },
  setItem(key, value) { try { localStorage.setItem(key, value); } catch { /* Storage can be disabled. */ } }
};
const preferredTheme = preferenceStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
if (preferredTheme === "light") document.documentElement.dataset.theme = "light";
