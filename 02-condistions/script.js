// On peut faire des condistion en JavaScript
var genre= confirm('Es-tu un garçon?');

if(genre == true){
    console.log('Tu es un garçon');
} else {
    console.log('Tu es une fille');
}

// on peut combiner les comparaison (et, ou)

var demande = prompt('Pain, croissant ou chocolatine?');
var localisation = prompt('D\'ou venez-vous?')


if(demande == 'croissant'|| demande =='pain'){
    console.log('Bienvenue');
} else if (demande =='chocolatine'&& localisation =='sud'){
    console.log('Sortez')
}else{
    console.log('il faut dire pain au chocolat')
}

//Le switch (un if amélioré)
var choix = pormpt('Veuillez choisir une couleur : bleu, rouge,vert');
switch(choix){
    case 'bleu':
        console.log('vous avez choisi bleu');
    break;

    case 'rouge':
    case 'red':
        console.log('vous avez choisi rouge')
    break;

    default:
        console.log('veuillez choisir une couleur...');
}