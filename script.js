const link = document.getElementById('link')
const output = document.getElementById('output')

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
  if (link.value == "") {
    output.innerHTML = "This field can't be blank!"
  } else {
    fetch("https://trampoline.turbowarp.org/api/users/BwnnyRxbbit")
    .then((response) => response.json())
    .then((response) => {
      output.innerHTML = response;
    })
  }
}