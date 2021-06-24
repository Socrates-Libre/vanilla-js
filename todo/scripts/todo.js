addEventListener("load", getUsername);

function getid(id) { return document.getElementById(id); }

const conteneur = getid('conteneur');
const header = getid('header');
const formulaire = getid('formulaire');
const inputLabel = getid('inputLabel');
const input = getid('input');
const button = getid('button');
const valider =getid('valider');

valider.addEventListener("click", finir);
button.addEventListener("click", creer);
let checkboxes = document.getElementsByTagName('input');

function finir() {

  for (var i = 0; i < checkboxes.length; i++) {

    if (checkboxes[i].getAttribute("type") === "checkbox" && checkboxes[i].checked) {
      console.log("dans if");
      checkboxes[i].disabled = true;
      checkboxes[i].parentNode.classList.remove('taskLi');
      checkboxes[i].parentNode.classList.add('disabled');
    }
  }
}

function creer() {
  let item = document.createElement("li")  
}

function getUsername() {
  let username = prompt("Entrez votre nom !");
  if (username.length < 1) {
    username = "my";
  }
  let possessif = (username === "my" || username.charAt(username.length - 1) === 's') ? " " : "'s ";
  header.textContent = capitalize(username) + possessif + "Todo List";
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

attachedEventListener();

function attachedEventListener() {

  for (var i = 0; i < checkboxes.length; i++) {
    let className = checkboxes[i].getAttribute("class");
    if (className != null && className === "task" ) {
      checkboxes[i].addEventListener('click', handleChecked);
    }
  }
}

function handleChecked(e) {
  let checkbox = e.target;
  let checkParent = checkbox.parentNode;
  if (checkbox.checked) {

    addThickPng(checkParent);
  } else {
    removeThick(checkParent);
  }
}

function addThickPng(li) {

  let image = document.createElement('img');
  let source = "images/Flat_tick_icon.png";
  image.setAttribute("src", source);
  image.setAttribute("alt", "done");
  image.setAttribute("width", "20");
  image.setAttribute("height", "auto");
  image.setAttribute("class", "done");
  li.appendChild(image);
}

function removeThick(li) {
  let images = li.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    li.removeChild(images[i]);
  }

}

function popup(username) {
  let myPopup = document.createElement("div");
  myPopup.setAttribute("id", "popup");
  myPopup.setAttribute("class", "visible");
  let texte = document.createTextNode("Bienvenue dans ta todo list, " + username);
  let close = document.createElement("a");
  close.setAttribute("href", "#top");
  close.setAttribute("id", "close");
  let lien = document.createTextNode("X");
  close.appendChild(lien);
  myPopup.appendChild(texte);
  myPopup.appendChild(close);
  conteneur.appendChild(myPopup);

  close.addEventListener("click", function() {
    closePopup(myPopup);
  });
}

function closePopup(element) {
  element.classList.remove('visible');
  element.classList.add('hidden');
}
