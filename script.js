const display = document.getElementById('display')
const url = document.getElementById('url')

//Toggle light or dark mode
function toggleTheme() {
    let theme = document.getElementsByTagName("html")[0];
    if (theme.className == "light") {
        theme.className = "dark";
    } else if (theme.className == "dark") {
        theme.className = "light";
    }
}

fetch("https://api.scratch.mit.edu/users/BwnnyRxbbit/")
  .then((response) => response.json())
  .then((json) => console.log(json));

function getResult() {
    if (url.value == "") {
        display.innerHTML = "This field can't be blank!"
    }
}