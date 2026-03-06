export function getTheme() {
const saved = localStorage.getItem("theme");
return saved === "dark";
}

export function setTheme(isDark: boolean) {
if (isDark) {
document.documentElement.classList.add("dark");
localStorage.setItem("theme", "dark");
} else {
document.documentElement.classList.remove("dark");
localStorage.setItem("theme", "light");
}
}

export function initTheme() {
const saved = localStorage.getItem("theme");

if (saved === "dark") {
document.documentElement.classList.add("dark");
} else {
document.documentElement.classList.remove("dark");
}
}
