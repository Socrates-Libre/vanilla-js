addEventListener("load", popup);

function getid(id) { return document.getElementById(id); }

const conteneur = getid('conteneur');
const header = getid('header');
const formulaire = getid('formulaire');
const todoList = getid('todoList');
const inputLabel = getid('inputLabel');
const input = getid('input');
const button = getid('button');
const valider =getid('valider');

valider.addEventListener("click", finir);
button.addEventListener("click", creer);
let checkboxes = document.getElementsByTagName('input');

function finir() {

  console.log(checkboxes);

  for (var i = (checkboxes.length - 1); i > 0; i--) {

    if (checkboxes[i].getAttribute("type") === "checkbox" && checkboxes[i].checked) {
      checkboxes[i].disabled = true;

      let li = checkboxes[i].parentNode;
      let ul = li.parentNode;

      li.classList.remove('taskLi');
      li.classList.add('disabled');

      let garbage = ul.removeChild(li);

      console.log(garbage);

      getid("done").appendChild(garbage);
    }
  }
}

function creer() {

  let saisie = input.value.trim();
  let child = getid("start");
  if(child !== null) {
    let parent = child.parentNode;
    parent.removeChild(child);
  }
  if (saisie.length > 2) {

    if (true) {
      let item = document.createElement("li");
      let textItem = document.createTextNode(saisie);
      let checkItem = document.createElement("input");
      checkItem.setAttribute("type", "checkbox");
      checkItem.setAttribute("class", "task");
      checkItem.setAttribute("value", saisie);
      checkItem.addEventListener("click", handleChecked);

      item.appendChild(checkItem);
      item.appendChild(textItem);
      item.setAttribute("class", "taskLi");

      todolist.appendChild(item);
    } else {
      console.log("bkp: in else" + taches);
      alert("Vous essayez de créer une tâche déja crée !");
    }
  } else {
    alert("Votre tâche contient moins de 2 lettres ! Invalide !");
  }

  input.value = "";
  input.focus;

  return false;
}

function alerter(message) {
  let myPopup = document.createElement("div");
  myPopup.setAttribute("id", "popup");
  myPopup.setAttribute("class", "visible");
  let texte = document.createTextNode(message);

  let ok = document.createElement("button");
  let textOk = document.createTextNode("OK");
  ok.addEventListener("click", function() { closePopup(myPopup) });

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

function notIn(tableau, element) {
  for (var i = 0; i < tableau.length; i++) {
    if (tableau[i].equalsIgnoringCase(element)) {
      return false;
    }
  }
  return true;
}

function equalsIgnoringCase(text, other) {
    return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
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

function popup() {
  let myPopup = document.createElement("div");
  myPopup.setAttribute("id", "popup");
  myPopup.setAttribute("class", "visible");
  let texte = document.createTextNode("Entrez votre nom svp : ");

  let inputNom = document.createElement("input");
  inputNom.setAttribute("id", "inputNom");
  let ok = document.createElement("button");
  let textOk = document.createTextNode("OK");
  let cancel = document.createElement("button");
  let textCancel = document.createTextNode("cancel");

  myPopup.appendChild(texte);
  myPopup.appendChild(inputNom);
  ok.appendChild(textOk);
  cancel.appendChild(textCancel);
  myPopup.appendChild(ok);
  myPopup.appendChild(cancel);
  conteneur.appendChild(myPopup);
  inputNom.focus();
  ok.addEventListener("click", function() { saveUsername(); closePopup(myPopup) });
  cancel.addEventListener("click", function() {
    saveUsername();
    closePopup(myPopup);
  });
}

function saveUsername() {

  let inputName = getid("inputNom");
  let username = capitalize(inputName.value.trim());
  if (username.length < 1) {
    username = "Anonymous";
  }
  let possessif = (username === "my" || username.charAt(username.length - 1) === 's') ? " " : "'s ";
  header.textContent = capitalize(username) + possessif + "Todo List";
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function closePopup(element) {
  element.classList.remove('visible');
  element.classList.add('hidden');

  let parent = element.parentNode;
  parent.removeChild(element);
  input.focus();
}
