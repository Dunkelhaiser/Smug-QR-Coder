/* eslint-disable @typescript-eslint/no-non-null-assertion */
export {};

const themeBtn = document.querySelector(".theme-btn") as HTMLButtonElement;
const themeIcon = document.querySelector(".theme-btn i");

let theme = localStorage.getItem("theme") || "light";
document.querySelector("body")!.id = theme;
document.querySelector('meta[name="theme-color"]')!.setAttribute("content", theme === "light" ? "#e7e7e7" : "#1a1c22");
themeIcon!.className = theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun";

const changeTheme = () => {
    theme = theme === "light" ? "dark" : "light";
    document.querySelector("body")!.id = theme;
    localStorage.setItem("theme", theme);
    document.querySelector('meta[name="theme-color"]')!.setAttribute("content", theme === "light" ? "#e7e7e7" : "#1a1c22");
    themeIcon!.className = theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun";
};

themeBtn.addEventListener("click", changeTheme);
