//Toggle light or dark mode
function toggleTheme() {
    let theme = document.getElementsByTagName("html")[0];
    if (theme.className == "light") {
        theme.className = "dark";
    } else if (theme.className == "dark") {
        theme.className = "light";
    }
}