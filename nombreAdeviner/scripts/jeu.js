/*
  Pourquoi ce projet ?

  - pour utiliser les variables.
  - pour utiliser les nombres.
  - pour utiliser les chaînes de caractères.
  - pour utiliser les Arrays.
  - pour utiliser les sélecteurs.
  - pour utliser les fonctions.
  - pour utiliser les maths.
  - pour utiliser les opérateurs.
  - pour utiliser les conditions.

*/


let random = 0;
let essais;

let propositions;
let parties = [];
const reponses = document.getElementById('propositions');
const texte = document.getElementById('saisie');
const retours = document.getElementById('retours');
const commentaires = document.getElementById('commentaires');
const input = document.getElementById('nombre');
const button = document.getElementById('button');
const restants = document.getElementById('essais');

function jouer() {

  random = genererUnNombre();
  propositions = [];
  essais = 10;

  display(restants, essais);

  retours.classList.remove('green');
  retours.classList.remove('red');
  retours.classList.remove('orange');
  retours.classList.remove('visible');
  retours.classList.add('hidden');

  reponses.textContent = '';
  commentaires.textContent = ''

  input.value = '';
  input.focus();

  button.textContent = "Ok";
  button.classList.add('ok');
  button.classList.remove('rejouer');
  button.onclick = function() {handleSubmit(); return false;}

}

function genererUnNombre() {
  return Math.floor(Math.random() * 100) + 1;
}

function toggleButton() {
  input.disable = true;
  button.textContent = "Rejouer";
  button.classList.add('rejouer');
  button.classList.remove('ok');
  button.onclick = function() {jouer(); return false;}
}

function display(boite, essaisRestants) {
  let pluriel = essaisRestants > 1 ? "s" : "";
  boite.textContent = essaisRestants + " essai" + pluriel + " restant" + pluriel;
}

function handleSubmit() {

  let saisie = parseInt(input.value);

  texte.textContent = "Vous avez déja saisi :";
  retours.classList.remove('hidden');
  retours.classList.add('visible');

  if(isNaN(saisie) || saisie < 1 || saisie > 100) {
    alert("Entre un nombre entre 1 et 100 avant de clicker sur ok!")
  } else {

    if (essais < 1) {

      retours.classList.remove('orange');
      retours.classList.add('red');
      commentaires.textContent = "Perdu! Vous avez dépasser le nombre d'essais autorisés.";

      toggleButton();

    } else {
      let propal = input.value.padStart(2, '0');
      propositions.push(propal);
      let proposition = propositions.join(" ");
      reponses.textContent = proposition;

      if(saisie === random) {

        retours.classList.remove('orange');
        retours.classList.add('green');
        commentaires.textContent = "Bravo! le nombre est bien " + random;

        toggleButton();

      } else if (saisie < random) {
        retours.classList.add('orange');
        commentaires.textContent = "Faux! Le nombre saisi est trop PETIT.";

      } else {
        retours.classList.add('orange');
        commentaires.textContent = "Faux! Le nombre saisi est trop GRAND.";
      }
    }
  }
  essais--;
  display(restants, essais);
  input.focus();
  input.value = '';

}

jouer();
