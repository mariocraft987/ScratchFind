const link = document.getElementById('link');
const image = document.getElementById('image');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');
const output5 = document.getElementById('output5');
const output6 = document.getElementById('output6');
const output7 = document.getElementById('output7');

let id = "ID: ";

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
      let username = "Username: ";
      output1.innerHTML = username.bold() + response.username;
      output2.innerHTML = id.bold() + response.id;
      let scratchteam = "Scratch Team?: ";
      output3.innerHTML = scratchteam.bold() + response.scratchteam;
      let joined = "Joined: ";
      output4.innerHTML = joined.bold() + response.history.joined;
      let country = "Country: ";
      output5.innerHTML = country.bold() + response.profile.country;
      let bio = "About me: ";
      output6.innerHTML = bio.bold() + response.profile.bio;
      let status = "What I'm working on: ";
      output7.innerHTML = status.bold() + response.profile.status;
    })
  }
  if (currentValue == "project") {
    fetch("https://trampoline.turbowarp.org/api/projects/" + link.value)
    .then((response) => response.json())
    .then((response) => {
      let title = "Title: ";
      output1.innerHTML = title.bold() + response.title;
      output2.innerHTML = id.bold() + response.id;
      let instructions = "Intruction: ";
      output3.innerHTML = instructions.bold() + response.instructions;
      let description = "Notes and Credits: ";
      output4.innerHTML = description.bold() + response.description;
      let author = "Author: @";
      output5.innerHTML = author.bold() + response.author.username;
      output6.innerHTML = "";
    })
  }
}
