const formulaire = document.getElementById("mon_formulaire");
const listeDonnees = document.getElementById("liste_donnees");

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();
  

  // Récupérer les valeurs des champs du formulaire
  const tache = document.getElementById("tache").value;
  const date_echeance = document.getElementById("date_echeance").value;
  const priorite = document.getElementById("priorite").value;

  // Créer un nouvel élément de liste
  const elementListe = document.createElement("div");
  // Ajouter l'élément de liste à la liste
  listeDonnees.appendChild(elementListe);

  // Ajouter le titre (tache) à l'élément de liste
  const h4 = document.createElement('h4');
  h4.innerText = tache;
  elementListe.appendChild(h4);
  elementListe.style.margin = "2%";
  elementListe.style.justifyContent = "space between";
  elementListe.style.alignItems = "center";

  // Ajouter la date à l'élément de liste
  const bouton = document.createElement('span');
  bouton.innerText = date_echeance;
  bouton.style.borderRadius = "30px";
  bouton.style.borderStyle = "solid";
  bouton.style.borderColor = "black";
  bouton.style.borderWidth = "1%";
  bouton.style.padding = "1%";
  elementListe.appendChild(bouton);

  // Ajouter la priorité à l'élément de liste
  const span = document.createElement('span');
  span.innerText = priorite;
  span.style.color = "black";
  span.style.backgroundcolor = "white";
  span.style.borderRadius = "30px";
  span.style.borderStyle = "solid";
  span.style.borderWidth = "1%";
  span.style.padding = "1%";
  elementListe.appendChild(span);

  //Style de liste donnees
  listeDonnees.style.display = "flex";
  listeDonnees.style.flexDirection = "column";

const boutonSupprimer = document.createElement("button");
boutonSupprimer.innerText = "Supprimer";
boutonSupprimer.style.borderRadius = "30px";
boutonSupprimer.style.borderStyle = "solid";
boutonSupprimer.style.borderColor = "black";
boutonSupprimer.style.borderWidth = "1%";
boutonSupprimer.style.padding = "1%";

elementListe.appendChild(boutonSupprimer);

boutonSupprimer.addEventListener("click", () => {
  // Supprimer l'élément de liste
  elementListe.parentNode.removeChild(elementListe);
});

   // Vider les champs du formulaire
   formulaire.reset();
});
const boutonSupprimer = document.createElement("button");
boutonSupprimer.innerText = "Supprimer";
boutonSupprimer.style.borderRadius = "30px";
boutonSupprimer.style.borderStyle = "solid";
boutonSupprimer.style.borderColor = "black";
boutonSupprimer.style.borderWidth = "1%";
boutonSupprimer.style.padding = "1%";

elementListe.appendChild(boutonSupprimer);

boutonSupprimer.addEventListener("click", () => {
  // Supprimer l'élément de liste
  elementListe.parentNode.removeChild(elementListe);
});


