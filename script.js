const display = document.getElementById('display')
const url = document.getElementById('url')

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
return fetch('https://api.scratch.mit.edu/users/BwnnyRxbbit/', {    
    method: 'GET',    
    withCredentials: true,    
    crossorigin: true,    
    mode: 'no-cors',       
  })    
    .then((res) => res.json())    
    .then((data) => {   
        return data; 
    })    


function getResult() {
    if (url.value == "") {
        display.innerHTML = "This field can't be blank!"
    }
}