import requests
from pyscript import document

url = document.querySelector("#url")
display = document.querySelector("#display")
display.innerText = "a"
link = ""

def hello(event):
  link = url.value
  display.textContent = link