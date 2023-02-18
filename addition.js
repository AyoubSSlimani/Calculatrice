//Selection des boutons
let buttonPlus = document.querySelector(".addition");
let buttonMinus = document.querySelector(".soustraction");
let buttonMultiply = document.querySelector(".multiplication");
let buttonDivide = document.querySelector(".division");
let buttonEgale = document.querySelector(".egale");
let buttonColorOranges = document.querySelectorAll(".colorOrange");
let buttonOperations = document.querySelectorAll(".operation");



//Permet de savoir si un bouton à été cliqué
let isButtonEraseClicked = false;
let isButtonNombresClicked = false;
let isButtonPlusClicked = false;
let isButtonMultiplyClicked = false;
let isButtonMinusClicked = false;
let isButtonDivideClicked = false;
let isButtonEgaleClicked = false;
let isButtonOperationClicked = false;
let numberPop;
let operationName;
let countClick = 0;

let eraseButton = document.querySelector(".eraseButton");

//Permet d'ajouter des nombres dans un tableau pour les calculer entre eux plus tard 
function addNumber() {
    maDivResultatCache = maDivResultat;
    tableResultat.push(parseInt(maDivResultatCache.textContent));
    //maDivResultat.innerHTML = ""; 
    isButtonEgaleClicked = false;
}
addNumber();

//Permet de séléctionner un bouton opérateur et d'appeler la fonction addNumber()
function operation(){
    for (const operateur of buttonOperations){
        operateur.addEventListener("click", function(){
            addNumber();
            switch(operateur.classList[2]) {
                case "addition": 
                    countClick = 0;
                    countClick++;
                    if(countClick === 1){
                    whatTypeOfOperation();
                    }
                    operationName = "addition";
                    isButtonDivideClicked = false;
                    isButtonMinusClicked = false;
                    isButtonMultiplyClicked = false;
                    isButtonPlusClicked = true;
                    if(isButtonPlusClicked){
                        operateur.style.backgroundColor = "lightgrey";
                    }
                    addition();
                    break;
                case "soustraction": 
                    countClick = 0;
                    countClick++;
                    if(countClick === 1){
                        whatTypeOfOperation();
                    }
                    operationName = "soustraction";
                    isButtonDivideClicked = false;
                    isButtonPlusClicked = false;
                    isButtonMultiplyClicked = false;
                    isButtonMinusClicked = true;
                    if(isButtonMinusClicked){
                        operateur.style.backgroundColor = "lightgrey";
                    }
                    soustraction();
                    console.log(countClick);
                    break;
                case "multiplication": 
                    countClick = 0;
                    countClick++;
                    if(countClick === 1){
                        whatTypeOfOperation();
                    }
                    operationName = "multiplication";
                    isButtonPlusClicked = false;
                    isButtonDivideClicked = false;
                    isButtonMinusClicked = false;
                    isButtonMultiplyClicked = true;
                    if(tableResultat[0] == 0){
                        tableResultat[0] = 1;
                    }
                    multiplication();
                    break;   
                case "division": 
                    countClick = 0;
                    countClick++;
                    if(countClick === 1){
                        whatTypeOfOperation();
                    }
                    operationName = "division";
                    isButtonPlusClicked = false;
                    isButtonMultiplyClicked = false;
                    isButtonMinusClicked = false;
                    isButtonDivideClicked = true;
                    division();
                    break; 
                default:
                    console.log("je ne comprends pas l'opération choisie");
            }
            })
    }
        buttonOrange();
}
operation();
//operation(buttonPlus);
//operation(buttonMinus);
//operation(buttonMultiply);
//operation(buttonDivide);

function addition(){
        maDivResultatCache = 0;
            for(i = 0; i < tableResultat.length; i++){
                if(lastResultat != 0){
                    maDivResultatCache = lastResultat;
                    maDivResultatCache += tableResultat[i];
                } else {
                    maDivResultatCache += tableResultat[i];
                }
                maDivResultat.innerHTML = maDivResultatCache;
                lastResultat = maDivResultatCache;
            }
            tableResultat = [];
}


function multiplication(){
        maDivResultatCache = 1;
            for(i = 0; i < tableResultat.length; i++){
                if(lastResultat != 0){
                    maDivResultatCache = lastResultat;
                    maDivResultatCache *= tableResultat[i];
                } else {
                    maDivResultatCache *= tableResultat[i];
                }
                maDivResultat.innerHTML = maDivResultatCache;
                lastResultat = maDivResultatCache;
            }
            tableResultat = [];
}

function soustraction(){
    maDivResultatCache = 0;
            for(i = 0; i < tableResultat.length; i++){
                if(lastResultat != 0){
                    maDivResultatCache = lastResultat;
                    maDivResultatCache -= tableResultat[i];
                } else if(tableResultat[0] == 0) {
                    maDivResultatCache += tableResultat[i];
                } else {
                    maDivResultatCache += tableResultat[i];
                }
                maDivResultat.innerHTML = maDivResultatCache;
                lastResultat = maDivResultatCache;
            }
            tableResultat = [];
}

function division(){
    maDivResultatCache = 0;
        for(i = 0; i < tableResultat.length; i++){
            if(lastResultat != 0){
                maDivResultatCache = lastResultat;
                maDivResultatCache /= tableResultat[i];
            } else if(tableResultat[0] == 0){
                maDivResultatCache += tableResultat[i];
            }
            else {
                maDivResultatCache += tableResultat[i];
            }
            maDivResultat.innerHTML = maDivResultatCache;
            lastResultat = maDivResultatCache;
        }
        tableResultat = [];
}


//Permet de donner le résultat suivant l'opération qu'on a effectué
function egale() {
    buttonEgale.addEventListener("click", function(){
        buttonEgale.style.backgroundColor = "lightgrey";
        maDivResultatCache = maDivResultat;
        tableResultat.push(parseInt(maDivResultatCache.textContent));
        whatTypeOfOperation();
        isButtonEgaleClicked = true;
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

//fonction qui permet de vérifier l'opération qui a été utilisé
function whatTypeOfOperation(){
    switch(operationName){
        case "addition":
            addition();
            break;
        case "soustraction":
            soustraction();
            break;
        case "multiplication":
            multiplication();
            break;
        case "division":
            division();
            break;
        default:
            console.log("opération inconnue");
            break;
    }
}