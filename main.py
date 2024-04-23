import requests
from pyscript import document

url = document.querySelector("#url")
display = document.querySelector("#display")
display.innerText = "a"
link = ""
response = ""

def getResult(event):
  link = url.value
  response = requests.get(link)
  display.innerText = response.text