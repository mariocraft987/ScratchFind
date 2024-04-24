const output = document.getElementById("output")
const url = "a"
console.log(url)


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
fetch('https://api.scratch.mit.edu/users/BwnnyRxbbit/', {
  mode: 'no-cors'
})
  .then(response => {
    const json = response.json();
    console.log(json);
    if (response.ok) {
      console.log('Request successful');
    } else {
      console.error('Request failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });  


function getResult() {
    if (url.value == "") {
        output.innerHTML = "This field can't be blank!"
    }
}

if (url.value == "") {
    output.innerHTML = "THIS IS TEST"
}

console.log(document.getElementById('output'))