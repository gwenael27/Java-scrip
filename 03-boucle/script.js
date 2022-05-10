// Récap opérations 
var a = 10 + 4;

var b = 20 + a;

var c = 0; 

// c vaut 34
c += a; // c = c + a 

//b vaut 35

console.log(b++); //affiche 34

//b vaut 36

console.log(++b);//affiche 36

//Division

var d = 10 / 2; //affiche 5
//Modulo (reste de la division)

var e = 10 % 3 //affiche 1 

//puissance 
console.log(10**2);

//Les boucles (for et while)
//le for a 3 instructions 
//initialisation (i = 0)
//condition jusqu'a (i<10)
// incrementation (i++ ou i = i + 1)
for(var i = 0; i<10;i++ ){
    console.log(i);
}
// Le for permet de parcourir un tableau 
var products = ['café','Thé'];
for(var product of products){
    console.log(product);
}


//while 
//on dit que weather est true quand il fait beau
var weather = true;
while(weather){
    console.log('Je sors dehors');
    weather = confirm('Fait-il beau ?')

}

// Le do while se fait au moins 1 fois

var night = false;
do{
    console.log('On voit rien');
    night = confirm('Fait-il nuit?');
}while (night);

//comparaison avec ===
// Le || 0 permet de s'assurer qu'il tape un nombre 
'45'== 45; //true
'45' === 45; //false

//On peut convertir une chaine en nombre
var nombre = parseInt(prompt('Nomnre?'))||0;