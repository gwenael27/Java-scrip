// On peut declarer des variables en js
var prenom = 'Fiorella';

// On peut afficher un truc dans la console
console.log('Salut' + prenom );

// on peut faire des calculs

var nombre1 = 10;
var nombre2 = nombre1 +5;

// On peut afficher un truc dans une popup

// alert(nombre2);

// on peut ajouter un truc sur la page (non conseiller)

// document.write('Salut Javascript');

function presentation(){
            // On peut demander un truc a l'utilisateur 
        var nom = prompt('Qui es tu ?');

        console.log('Tu est '+ nom);
}

// on peut faire des tableau
var notes = [15,4,12,'toto'];

//pour afficher 12, on utilise l'index 2
// On commance a 0
alert(notes[2]);

//on peut créer des objets (literral)
var personne = {
    nom : 'mota',
    prenom:'Fiorella',
    dateDeNaissance: [31,12,2019]
};

//alert(personne['prenom']);
//alert(personne.prenom);
console.log(personne);

//Manipuler les tableau (ou les chaines)
console.log(notes);
console.log(personne.prenom.toLocaleUpperCase())

//on doit parfoit échapper les quotes on double quotes
console.log('Fiorella dit :"Papal\'meilleur\\"');

