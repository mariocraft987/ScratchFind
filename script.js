const link = document.getElementById('link')
const output1 = document.getElementById('output1')
const output2 = document.getElementById('output2')
const output3 = document.getElementById('output3')
const output4 = document.getElementById('output4')

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


const drop = document.getElementById("drop");
let currentValue;
drop.addEventListener("change", change);

function change(event) {
  currentValue = event.target.value;
  console.log(currentValue);
}

function getResult() {
  if (currentValue == "user") {
    fetch("https://trampoline.turbowarp.org/api/users/" + link.value)
    .then((response) => response.json())
    .then((response) => {
      output1.innerHTML = "ID: " + response.id
    })
  }
}
