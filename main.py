import requests
from pyscript import document


url = document.querySelector("#url")
display = document.querySelector("#display")
display.innerText = "a"
link = url.value

def hello():
    response = requests.get(link)
    display.innerText = response.text