// Toggle light or dark mode
function toggleTheme() {
    let theme = document.getElementsByTagName("html")[0];
    if (theme.className == "light") {
        theme.className = "dark";
    } else if (theme.className == "dark") {
        theme.className = "light";
    }
}

// Get data
fetch("https://trampoline.turbowarp.org/api/users/BwnnyRxbbit")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
})

function getResult() {
  if (document.getElementById('url').value = "") {
    document.getElementById('output').innerHTML = "a"
  }
}