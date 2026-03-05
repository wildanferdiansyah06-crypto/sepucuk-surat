export function getTheme() {
return localStorage.getItem("theme") === "dark";
}

export function setTheme(isDark: boolean) {
localStorage.setItem("theme", isDark ? "dark" : "light");
}
