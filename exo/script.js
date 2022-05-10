var age = prompt('Veuillez saisir votre age')

if(age < 13){
    console.log('Interdit')
}else if(age >13 && age < 17){
    console.log('Bientot')
}else {
    console.log('Autoriser')
}