const link = document.getElementById('link');
const image = document.getElementById('image');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');
const output5 = document.getElementById('output5');
const output6 = document.getElementById('output6');
const output7 = document.getElementById('output7');

// Toggle light or dark mode
function toggleTheme() {
    let theme = document.getElementsByTagName("html")[0];
    if (theme.className == "light") {
        theme.className = "dark";
    } else if (theme.className == "dark") {
        theme.className = "light";
    }
}

const drop = document.getElementById("drop");
let currentValue;
drop.addEventListener("change", changed);

function changed() {
  currentValue = event.target.value;
}

function getResult() {
  if (currentValue == "user") {
    fetch("https://trampoline.turbowarp.org/api/users/" + link.value)
    .then((response) => response.json())
    .then((response) => {
      image.src = "https://cdn2.scratch.mit.edu/get_image/user/" + response.id + "_90x90.png?v=";
      output1.innerHTML = "Username: " + response.username;
      output2.innerHTML = "ID: " + response.id;
      output3.innerHTML = "Scratch Team?: " + response.scratchteam;
      output4.innerHTML = "Joined: " + response.history.joined;
      output5.innerHTML = "Country: " + response.profile.country;
      output6.innerHTML = "About me: " + response.profile.bio;
      output7.innerHTML = "What I'm working on: " + response.profile.status;
    })
  }
  if (currentValue == "project") {
    fetch("https://trampoline.turbowarp.org/api/projects/" + link.value)
    .then((response) => response.json())
    .then((response) => {
      output1.innerHTML = "Title: " + response.title;
      output2.innerHTML = "ID: " + response.id;
      output3.innerHTML = "Intruction: " + response.instructions;
      output4.innerHTML = "Notes and Credits: " + response.description;
      output5.innerHTML = "Author: @" + response.author.username;
      output6.innerHTML = "";
    })
  }
}
