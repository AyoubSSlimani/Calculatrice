let boutonPlus = document.querySelector(".addition");
let buttonEgale = document.querySelector(".egale");
let buttonColorOranges = document.querySelectorAll(".colorOrange");


// Permet de savoir si un bouton à été cliqué
let isButtonEraseClicked = false;
let isButtonNombresClicked = false;
let isButtonPlusClicked = false;
let isButtonEgaleClicked = false;


//let tableResultat = [];

let eraseButton = document.querySelector(".eraseButton");

//Permet d'ajouter des nombres entre eux
function addNumber() {
    maDivResultatCache = maDivResultat;
    tableResultat.push(parseInt(maDivResultatCache.textContent));
    console.log(tableResultat);
    maDivResultat.innerHTML = "";   
}

//Permet de séléctionner le bouton "+" et d'utiliser la fonction addNumber
function addition(){
    boutonPlus.addEventListener("click", function(){
    boutonPlus.style.backgroundColor = "lightgrey";
    isButtonPlusClicked = true;
    addNumber();
    })

    buttonOrange();
    
}
addition();




//Permet de donner le résultat suivant l'opération qu'on a effectué
function egale() {
    buttonEgale.addEventListener("click", function(){
        buttonEgale.style.backgroundColor = "lightgrey";
        tableResultat.push(parseInt(maDivResultatCache.textContent));
        console.log(tableResultat);
        maDivResultatCache = 0;
        for(i = 0; i < tableResultat.length; i++){
            maDivResultatCache += tableResultat[i];
        }
        console.log(maDivResultatCache);
        maDivResultat.innerHTML = maDivResultatCache;
    })

    buttonOrange();
}
egale();

//Permet d'enlever le backgroundColor gris d'un bouton orange lorsque je clique sur un nombre ou sur effacer
function buttonOrange() {
    eraseButton.addEventListener('click', function(){
        for(buttonColorOrange of buttonColorOranges){
            buttonColorOrange.style.backgroundColor = "#ff9f0a";
            isButtonEraseClicked = false;
        }
    })

    for(const nombre of nombres){
        nombre.addEventListener('click', function(){
            for(buttonColorOrange of buttonColorOranges){
                buttonColorOrange.style.backgroundColor = "#ff9f0a";
                isButtonNombresClicked = false;
            }
        })
        }
}


/*let table = [1,3,45,12];
let i;

for(nb in table){
    i += nb + nb;
    
}

console.log(i);
*/

