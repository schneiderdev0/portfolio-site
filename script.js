const THEME_KEY = "portfolio-theme";

function applyTheme(theme) {
    document.body.dataset.theme = theme;

    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
        themeToggle.textContent = theme === "dark" ? "Светлая тема" : "Тёмная тема";
        themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
}

function getInitialTheme() {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
}

function setupThemeToggle() {
    const themeToggle = document.querySelector(".theme-toggle");
    if (!themeToggle) {
        return;
    }

    themeToggle.addEventListener("click", () => {
        const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        localStorage.setItem(THEME_KEY, nextTheme);
    });
}

function setCurrentYear() {
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = String(new Date().getFullYear());
    }
}

document.addEventListener("DOMContentLoaded", () => {
    applyTheme(getInitialTheme());
    setupThemeToggle();
    setCurrentYear();
});
