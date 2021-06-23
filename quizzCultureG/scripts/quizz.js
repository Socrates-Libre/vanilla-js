/*
  Pourquoi ce projet ?

  - pour utiliser les variables.
  - pour utiliser les nombres.
  - pour utiliser les chaînes de caractères.
  - pour utiliser les objets.
  - pour utiliser les Arrays.
  - pour utiliser les sélecteurs.
  - pour utliser les fonctions.
  - pour utiliser les maths.
  - pour utiliser les opérateurs.
  - pour utiliser les conditions.
  - pour utiliser les boucles.
  - pour utiliser les 'listeners' d'événements.

*/

/*
  Déclaration des constants Questions du Quizz:
  1 à 15

  - Possibilité de rajouter des questions sur le même format.
  (ne pas oublier de pousser les nouvelles questions dans l'Array 'questions')
*/
const question1 = {
  numero: 1,
  question: "Quel est la couleur de la variété de pommes 'Granny Smith' ?",
  propositions: ["Rose", "Rouge", "Verte", "Jaune"],
  answer: "Verte"
}

const question2 = {
  numero: 2,
  question: "En quelle année de l'Exposition Universelle la Tour Eiffel a-t'elle été montrée pour la première fois ?",
  propositions: ["1855", "1889", "1901", "1937"],
  answer: "1889"
}

const question3 = {
  numero: 3,
  question: "Quel est l'homme le plus riche du monde en Juin 2021 ?",
  propositions: ["Elon Musk", "Bill Gates", "Jeff Besos", "Bernard Arnault"],
  answer: "Jeff Besos"
}

const question4 = {
  numero: 4,
  question: "Quel est le pays dont la capitale est Kuala Lumpur ?",
  propositions: ["le Laos", "l'Indonésie", "le Vietnam", "la Malaisie"],
  answer: "la Malaisie"
}

const question5 = {
  numero: 5,
  question: "En quelle unité de mesure est exprimé la Force ?",
  propositions: ["Fahrenheit", "Newton", "Graviton", "Kilogramme"],
  answer: "Newton"
}

const question6 = {
  numero: 6,
  question: "Quel os est le principal os de la hanche ?",
  propositions: ["Iliaque", "Fémur", "Coccys", "Homoplate"],
  answer: "Iliaque"
}

const question7 = {
  numero: 7,
  question: "Qui a chanté 'La Vie en Rose' en 1947 ?",
  propositions: ["Edith Piaf", "Barbara", "Joséphine Baker", "Amel Bent"],
  answer: "Edith Piaf"
}

const question8 = {
  numero: 8,
  question: "Combien de litres de sang contient le corps humain d'un adulte ?",
  propositions: ["3", "5", "7", "9"],
  answer: "5"
}

const question9 = {
  numero: 9,
  question: "En Mai 1968 que trouve t'on sous les pavés ?",
  propositions: ["l'Herbe", "la Mer", "la Plage", "la Terre"],
  answer: "la Plage"
}

const question10 = {
  numero: 10,
  question: "Quel Président Américain exerça entre les deux Présidents Bush (Père et Fils) ?",
  propositions: ["Ronald Reagan", "Bill Clinton", "Barack Obama", "Donald Trump"],
  answer: "Bill Clinton"
}

const question11 = {
  numero: 11,
  question: "Dans quel pays le chanteur pop Mika est-il né ?",
  propositions: ["Liban", "Iran", "Iraq", "Lybie"],
  answer: "Liban"
}

const question12 = {
  numero: 12,
  question: "Pour la pratique de quel sport le franco-algérien Djamel Bouras est-il connu ?",
  propositions: ["la Boxe", "la Natation", "le Karaté", "le Judo"],
  answer: "le Judo"
}

const question13 = {
  numero: 13,
  question: "De combien de trous est pourvu un Billard dit 'Français' ?",
  propositions: ["6", "4", "8", "0"],
  answer: "0"
}

const question14 = {
  numero: 14,
  question: "Combien d'années séparent les deux titres mondiaux de l'équipe de France de Football ?",
  propositions: ["16", "20", "24", "28"],
  answer: "20"
}

const question15 = {
  numero: 15,
  question: "Quel est la valeur de Pi ?",
  propositions: ["3.18", "3.16", "3.14", "2.14"],
  answer: "3.14"
}

/* Déclaration de l'Array 'questions' avec assignment des 15 questions de départ */
const questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15];
// ATTENTION: si ajout(s) nouvelle(s) question(s) : ne pas oublier de rajouter ici.

/* sélection des constantes éléments du DOM */
const root = document.getElementById('root');
const inputs = document.getElementsByTagName('input');
const labels = document.getElementsByTagName('label');
const sauvegarde = document.getElementById('sauvegarde');
const message = document.getElementById('popup');
const myButton = document.getElementById('button');

/*
  Déclaration des variables:
  Arrays de Questions mélangées et de Scores à sauvegarder,
  nombre de parties et score final
*/
let shuffledQuestions = [];
let finalScore = 0;
let parties = 0;
let scores = [];

// fonction pour mélanger un array trouvée et re-copier sur Stack Overflow: "ne pas réinventer la roue!"
function shuffle(array) {

  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// fonction pour gérer le comportement des éléments html 'input' et 'label' après click.
function handleChecked(e) {

  for (let i = 0; i < inputs.length; i++) {

    if(inputs[i].checked) {
      labels[i].setAttribute("class", "isChecked");
      message.classList.remove('visible');
      message.classList.add('hidden');
    } else {
      labels[i].setAttribute("class", "isNotChecked");
    }
  }

  let from = e.target;
  if(from.parentNode) {
    let parent = from.parentNode;
    let destination = nextParagraphe(parent);
    scrollDown(destination);
  }
}

//
function nextParagraphe(from) {
  return from.nextElementSibling;
}

// fonction pour descendre la fenêtre en scrollant à chaque réponse sélectionnée.
function scrollDown(destination) {
  let to = elementPosition(destination);
  window.scroll({
    top: (to.clientY - 180),
    left: 0,
    behavior: 'smooth'
  });
}


// fonction qui détermine la position d'un élément html.
// trouvée et recopier sur https://www.equinode.com/blog/article/recuperer-la-position-dun-element-avec-javascript
function elementPosition(a) {
  let b = a.getBoundingClientRect();
  return {
    clientX: a.offsetLeft,
    clientY: a.offsetTop,
    viewportX: (b.x || b.left),
    viewportY: (b.y || b.top)
  }
}

// fonction pour valider les bonnes et mauvaises réponses après soumission du formulaire.
function handleSubmit() {

  //appel de la fonction qui vérifie si il y a eu des boutons radios sélectionnés.
  checkRadios();

  for (let l = 0; l < inputs.length; l++) {
    if(inputs[l].checked) {
      for (let k = 0; k < questions.length; k++) {
        if (inputs[l].value === questions[k].answer) {
          inputs[l].setAttribute("class","good");
          finalScore++;
          break;
        } else {
          inputs[l].setAttribute("class","wrong");
        }
      }
    }
  }

  displayScore(); // ici, on affiche le score de la partie.
  toggleButton(); // ici, on modifie le bouton pour pouvoir rejouer.

  return false; // ici, on empêche le comportement par défaut du bouton.
}

function checkRadios() {
  let checkOneRadio = false;
  let checks = 0;

  while(!checkOneRadio & checks < inputs.length) {
    if(inputs[checks].checked) {
      checkOneRadio = true;
    }
    checks++;
  }
  if(!checkOneRadio) {
    message.classList.remove('hidden');
    message.classList.add('visible');

    checkRadios(); // boucler la vérification tant que rien n'est sélectionner.
  }
}

// fonction pour afficher le score final de la partie.
function displayScore() {
  let pluriel = finalScore > 1 ? "s" : "";
  results.textContent = "Vous avez " +  finalScore + " bonne" + pluriel + " réponse" + pluriel + " !";
}

// fonction pour changer le texte du bouton 'vérifier ...'/'rejouer'
function toggleButton() {
  myButton.textContent = "Rejouer";
  myButton.setAttribute("class", "rejouer");
  myButton.removeEventListener("click", handleSubmit); // ici, on enlève l'event listener de soumission de formulaire pour le click sur bouton 'rejouer'.
  myButton.addEventListener("click", reset); // et là; on ajoute à la place un event listener de ré-initialisation.
}

// fonction pour réinitialiser les variables du quizz.
function reset() {

  //on sauvegarde dans un Array les scores des parties précédentes avant de réinitialiser.
  sauvegarder();

  // on réintialise le formulaire;
  resetForm();
  finalScore = 0;
  results.textContent = "";

  for (let n = 0; n < inputs.length; n++) {
    if(inputs[n].checked) {
      inputs[n].classList.remove("good");
      inputs[n].classList.remove("wrong");
      inputs[n].checked = false;
    }
  }

  for (let x = 0; x < labels.length; x++) {
    labels[x].classList.remove("isChecked");
    labels[x].classList.add("isNotChecked");
  }

  //appel de la fonction 'jouer' pour rejouer.
  jouer();
}

// fonction de sauvegarde des scores.
function sauvegarder() {
  scores.push("Partie n° " + ++parties + ", score : " + finalScore + ".");
}

// fonction pour afficher les questions du Quizz.
function displayQuizz() {

  // appel de la fonction qui créer les éléments du nouveau formulaire de quizz.
  createHtml();

}

function resetForm() {

  // enlever le conteneur div qui contient les éléments créés en js:
  let oldContainer = document.getElementById('conteneur');
  root.removeChild(oldContainer);

}

// fonction Pourquoi créer les éléments du formulaire de quizz.
function createHtml() {

  const conteneur = document.createElement("div");
  conteneur.setAttribute("id", "conteneur");

  for (let i = 0; i < shuffledQuestions.length; i++) {

    let objet = shuffledQuestions[i];
    let paragraphe = document.createElement("p");
    let texte = document.createTextNode("" +(i+1) + ". " + objet.question);
    let icon = document.createElement("span");
    icon.setAttribute("class", "material-icons-outlined");
    let help = document.createTextNode("help");
    icon.appendChild(help);
    paragraphe.appendChild(icon);
    paragraphe.appendChild(texte);
    let box = document.createElement("div");

    for (let j = 0; j < 4; j++) {
      let radio = document.createElement("input");
      let label = document.createElement("label");
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "question"+objet.numero);
      radio.setAttribute("value", objet.propositions[j]);
      label.setAttribute("for", objet.propositions[j]);
      label.setAttribute("class", "isNotChecked");
      label.textContent = objet.propositions[j];
      box.appendChild(radio);
      box.appendChild(label);
    }

    conteneur.appendChild(paragraphe);
    conteneur.appendChild(box);

  }

  root.appendChild(conteneur);
}

// fonction pour réactiver le bouton 'vérifier ...' et pour afficher les scores sauvegardés.
function activer() {
  myButton.textContent = "Vérifier les réponses";
  if(parties > 0) {
    sauvegarde.textContent = scores.join(" / ");
  }
  myButton.setAttribute("class", "verifier");
  myButton.removeEventListener("click", reset);
  myButton.addEventListener("click", handleSubmit);
}

// fonction pour jouer.
function jouer() {

  //on (re)mélange les questions pour la partie.
  shuffledQuestions = shuffle(questions);

  //on appelle la fonction d'activation du bouton 'vérifier'
  activer();

  // on appelle la fonction qui affiche les questions.
  displayQuizz();
}

//fonction pour feermer la pop-up d'erreur.
function fermer() {
  message.classList.remove('visible');
  message.classList.add('hidden');
}

// Ajout d'un event listener pour réagir aux clics sur le formulaire (soit sur les inputs de type radios).
root.addEventListener("click", handleChecked, true);

// appel de la fonction pour lancer le jeu au chargement de la page.
jouer();
