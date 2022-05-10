var frigo = {
    tomates : 0,
     oeuf : 0,
     pain : 0,
     jambon : 0,
     poulet : 0,
     fromage : 0,
    };

function remplire(){
    frigo={
tomates : prompt('Saisir le nombre de tomates'),
 oeuf : prompt('Saisir le nombre de oeuf'),
 pain : prompt('Saisir le nombre de pain'),
 jambon : prompt('Saisir le nombre de jambon'),
 poulet : prompt('Saisir le nombre de poulet'),
 fromage : prompt('Saisir le nombre de fromage'),
    }
    
    console.log(frigo);
}
function preparer(){
if (frigo.pain >= 1 && frigo.jambon >= 1 && frigo.tomates >= 1 || frigo.fromage >= 1){
    console.log('Sandwich et possible')
    frigo.pain --; //frigo.pain = frigo.pain -1
    frigo.jambon -= 1; //meme resulta que decu
    if(frigo.tomates >= 1){
        frigo.tomates --;
    }else{
        frigo.fromage --;
    }

}else if (frigo.poulet == 1){
    console.log('Je peut manger poulet')
    frigo.poulet --;
}else if (frigo.oeuf == 3){
    console.log('Je peut faire une ommelette')
    frigo.oeuf -= 3;
}else {
    console.log('mange des ships')
}

    console.log(frigo);
}