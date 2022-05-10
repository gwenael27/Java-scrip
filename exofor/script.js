//exo 1 

// for (var i = 0; i<11;i++){
//     console.log(i);
// }

//exo 2

// for (var i = 10; i > 1; i--){
//     console.log(i);
// }

//exo 3
// for (var i = 0; i< 100;i++){
//     a = i
//     if(a % 2 == 0){
//         console.log(a)
//     }else {
//         console.log('impair')
//     }
    
// }

//exo 4

// var cond = false;
// while(cond == false ){
//     var rep = prompt('Voulez vous rester sur le site ?');
//     if(rep == 'oui'|| rep == 'o'){
//         cond= true;
//         console.log('bienvenue');
//     }else if(rep == 'non'||rep== 'n'){
//         cond = true;
//         console.log('tchao');
//     }else{
//         cond=false;
//     }
// }

//exo 5

// var max = 100;
// var chiffre = Math.floor(Math.random() * max);
// prop = prompt('Saisir un chiffre entre 1 et 100');

// while(chiffre != prop){

// if(chiffre < prop){
//     alert('C\'est moin');
    
// }else if(chiffre> prop){
//     alert('C\'est plus');
// }
// prop = prompt('Saisir un chiffre entre 1 et 100');
// }


//exo6

// var chocolat = 0.60;
// var café = 0.40;
// var thé = 0.40;
// var prix = 0;
// var sucre = 0.05;
// var lait = 0.15;

// choix = prompt('Choisr boisson');


// while(choix != 'cho' || choix !='chocolat' || choix !='CHOCOLAT' || choix != 'caf' || choix !='café'|| choix !='cafe'|| choix!='CAFE' || choix != 'the'|| choix!='THE'|| choix!='thé'){

//     if(choix == 'cho' || choix =='chocolat' || choix =='CHOCOLAT'){
//         prix = chocolat;

//         choixsucre = prompt('voulez-vous du sucre');

//         while(choixsucre != 0 && choixsucre != 1 && choixsucre != 2){
//             choixsucre = prompt('voulez-vous du sucre');
//         }
//             if(choixsucre == 0){

//             }else if(choixsucre == 1){
//                 prix= prix + sucre;

//             }else if(choixsucre == 2){
//                 prix = prix + sucre * 2;

//             }
            
        
//         choixlait = prompt('Voulez-vous du lait')

//         while(choixlait != 0 && choixlait != 1){
//         choixlait = prompt('Voulez-vous du lait')
//         }

//         if(choixlait == 0){

//         }else if(choixlait == 1 ){
//             prix = prix + lait;
//         }
//           alert('Payer ' + prix +' centime');


//     }else if(choix == 'caf' || choix =='café'|| choix =='cafe'|| choix=='CAFE' ){
//         prix = café;

//               choixsucre = prompt('voulez-vous du sucre');

//         while(choixsucre != 0 && choixsucre != 1 && choixsucre != 2){
//             choixsucre = prompt('voulez-vous du sucre');
//         }
//             if(choixsucre == 0){

//             }else if(choixsucre == 1){
//                 prix= prix + sucre;

//             }else if(choixsucre == 2){
//                 prix = prix + sucre * 2;

//             }
            
        
//         choixlait = prompt('Voulez-vous du lait')

//         while(choixlait != 0 && choixlait != 1){
//         choixlait = prompt('Voulez-vous du lait')
//         }
        
//         if(choixlait == 0){

//         }else if(choixlait == 1 ){
//             prix = prix + lait;
//         }
//           alert('Payer ' + prix +' centime');


//     }else if(choix == 'the'|| choix=='THE'|| choix=='thé'){
//         prix = thé;
//         choixsucre = prompt('voulez-vous du sucre');

//         while(choixsucre != 0 && choixsucre != 1 && choixsucre != 2){
//             choixsucre = prompt('voulez-vous du sucre');
//         }
//             if(choixsucre == 0){

//             }else if(choixsucre == 1){
//                 prix= prix + sucre;

//             }else if(choixsucre == 2){
//                 prix = prix + sucre * 2;

//             }
            
        
//         choixlait = prompt('Voulez-vous du lait')

//         while(choixlait != 0 && choixlait != 1){
//         choixlait = prompt('Voulez-vous du lait')
//         }
        
//         if(choixlait == 0){

//         }else if(choixlait == 1 ){
//             prix = prix + lait;
//         }
//           alert('Payer ' + prix +' centime');


//     }

//     choix = prompt('Choisr boisson');
// }

var distributeur= {
    café : 0,
    chocolat : 0,
    the : 0,
    monnaie : 0,
    sucre : 0,
    lait : 0,
    prix : 0
};

var max = 30; 
var panne = Math.floor(Math.random() * max);
console.log(panne);
function boisson(){

    if(panne <= 15 || panne >= 20){
        choix = prompt('Choisr boisson');
    while(choix != 'cho' && choix !='chocolat' && choix !='CHOCOLAT' && choix != 'caf' && choix !='café' && choix !='cafe' && choix!='CAFE' && choix != 'the' && choix!='THE'  && choix!='thé'){
        choix = prompt('Choisr boisson'); 
        console.log(choix)
    }
    
        if(choix == 'cho' || choix =='chocolat' || choix =='CHOCOLAT'){
            distributeur.prix = distributeur.prix + 0.60;
            distributeur.chocolat -= 1; //chocolat --;

            choixsucre = prompt('voulez-vous du sucre');
    
            while(choixsucre != 0 && choixsucre != 1 && choixsucre != 2){
                choixsucre = prompt('voulez-vous du sucre');
            }
                if(choixsucre == 0){
    
                }else if(choixsucre == 1){
                    distributeur.prix= distributeur.prix + 0.05;
                    distributeur.sucre --;
    
                }else if(choixsucre == 2){
                    distributeur.prix= distributeur.prix + 0.05 + 0.05;
                    distributeur.sucre = distributeur.sucre - 2; 
    
                }
                
            
            choixlait = prompt('Voulez-vous du lait')
    
            while(choixlait != 0 && choixlait != 1){
            choixlait = prompt('Voulez-vous du lait')
            }
    
            if(choixlait == 0){
    
            }else if(choixlait == 1 ){
                distributeur.prix = distributeur.prix + 0.10;
                distributeur.lait --;
            }
              alert('Payer ' + distributeur.prix +' centime');
              alert('Bonne boisson')
              distributeur.monnaie = distributeur.monnaie + distributeur.prix;
              distributeur.prix = 0;


    
        }else if(choix == 'caf' || choix =='café'|| choix =='cafe'|| choix=='CAFE' ){
            distributeur.prix = distributeur.prix + 0.40;
            distributeur.café -= 1;
                  choixsucre = prompt('voulez-vous du sucre');
    
            while(choixsucre != 0 && choixsucre != 1 && choixsucre != 2){
                choixsucre = prompt('voulez-vous du sucre');
            }
                if(choixsucre == 0){
    
                }else if(choixsucre == 1){
                    distributeur.prix= distributeur.prix + 0.05;
                    distributeur.monnaie = distributeur.monnaie + distributeur.prix;
                    distributeur.sucre --;
    
                }else if(choixsucre == 2){
                    distributeur.prix= distributeur.prix + 0.05 + 0.05;
                    distributeur.monnaie = distributeur.monnaie + distributeur.prix;
                    distributeur.sucre = distributeur.sucre - 2; 
    
                }
                
            
            choixlait = prompt('Voulez-vous du lait')
    
            while(choixlait != 0 && choixlait != 1){
            choixlait = prompt('Voulez-vous du lait')
            }
    
            if(choixlait == 0){
    
            }else if(choixlait == 1 ){
                distributeur.prix = distributeur.prix + 0.10;
                distributeur.monnaie = distributeur.monnaie + distributeur.prix;
                distributeur.lait --;
            }
              alert('Payer ' + distributeur.prix +' centime');
              alert('Bonne boisson')
              distributeur.prix = 0;
    
    
        }else if(choix == 'the'|| choix=='THE'|| choix=='thé'){
            distributeur.prix = distributeur.prix + 0.60;
            distributeur.chocolat -= 1;

            choixsucre = prompt('voulez-vous du sucre');
    
            while(choixsucre != 0 && choixsucre != 1 && choixsucre != 2){
                choixsucre = prompt('voulez-vous du sucre');
            }
                if(choixsucre == 0){
    
                }else if(choixsucre == 1){
                    distributeur.prix= distributeur.prix + 0.05;
                    distributeur.monnaie = distributeur.monnaie + distributeur.prix;
                    distributeur.sucre --;
    
                }else if(choixsucre == 2){
                    distributeur.prix= distributeur.prix + 0.05 + 0.05;
                    distributeur.monnaie = distributeur.monnaie + distributeur.prix;
                    distributeur.sucre = distributeur.sucre - 2; 
    
                }
                
            
            choixlait = prompt('Voulez-vous du lait')
    
            while(choixlait != 0 && choixlait != 1){
            choixlait = prompt('Voulez-vous du lait')
            }
    
            if(choixlait == 0){
    
            }else if(choixlait == 1 ){
                distributeur.prix = distributeur.prix + 0.10;
                distributeur.monnaie = distributeur.monnaie + distributeur.prix;
                distributeur.lait --;
            }
              alert('Payer ' + distributeur.prix +' centime');
              alert('Bonne boisson')
              distributeur.prix = 0;
        } 
        
    }else{
        alert('Distributeur en panne')
    }
}

function remplire(){

    choixrempli = prompt('Que voulez vous remplire ?')

    if(choixrempli == 'chocolat'){
        repchoco = parseInt(prompt('Saisir combien de dose de chocolat vous venez d\'ajouter'));
        distributeur.chocolat = distributeur.chocolat + repchoco;

    }else if(choixrempli == 'café'){
        repcafe = parseInt(prompt('Saisir combien de dose de café vous venez d\'ajouter'));
        distributeur.café = distributeur.café + repcafe;

    }else if(choixrempli == 'thé'){
        repthe = parseInt(prompt('Saisir combien de dose de thé vous venez d\'ajouter'));
        distributeur.the = distributeur.the + repthe;

    }else if(choixrempli == 'sucre'){
        repsucre = parseInt(prompt('Saisir combien de dose de sucre vous venez d\'ajouter'))
        distributeur.sucre = distributeur.sucre + repsucre;

    }else if(choixrempli == 'lait'){
        replait = pareInt(prompt('Saisir combien de dose de lait vous venez d\'ajouter'))
        distributeur.lait = distributeur.lait + replait
    }else if(choixrempli !='lait'&& choixrempli !='chocolat'&&choixrempli !='thé'&&choixrempli !='café'&&choixrempli !='sucre' ){
        alert('Erreur');
    }

    alert('Le distributeur contient ' + distributeur.chocolat + ' dose de chocolat '+ distributeur.café + ' dose de café et '+ distributeur.the + ' dose de the')
    alert('Le distributeur contient aussi ' + distributeur.sucre +' dose de sucre ' + distributeur.lait + ' dose de lait')
}

function apercu(){
    alert('le montent de la machine est de '+ distributeur.monnaie)
}
