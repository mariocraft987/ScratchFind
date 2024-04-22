//Toggle light or dark mode
function toggleTheme() {
    let theme = getElementByTagName("html");
    if (theme.className == "light") {
        theme.className = "dark";
    } else if (theme.className == "dark") {
        theme.className = "light";
    }
}