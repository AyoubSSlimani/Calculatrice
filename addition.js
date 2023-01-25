//Selection des boutons
let buttonPlus = document.querySelector(".addition");
let buttonMinus = document.querySelector(".soustraction");
let buttonMultiply = document.querySelector(".multiplication");
let buttonDivide = document.querySelector(".division");
let buttonEgale = document.querySelector(".egale");
let buttonColorOranges = document.querySelectorAll(".colorOrange");


//Permet de savoir si un bouton à été cliqué
let isButtonEraseClicked = false;
let isButtonNombresClicked = false;
let isButtonPlusClicked = false;
let isButtonMinusClicked = false;
let isButtonEgaleClicked = false;
let nameOperation;
let numberPop;

let eraseButton = document.querySelector(".eraseButton");

//Permet d'ajouter des nombres dans un tableau pour les calculer entre eux plus tard 
function addNumber() {
    maDivResultatCache = maDivResultat;
    tableResultat.push(parseInt(maDivResultatCache.textContent));
    if(isButtonEgaleClicked === true){
        tableResultat.pop();
    }
    console.log(tableResultat);
    maDivResultat.innerHTML = "";   
    isButtonEgaleClicked = false;
}

//Permet de séléctionner un bouton opérateur et d'appeler la fonction addNumber()
function operation(buttonOperation){
    buttonOperation.addEventListener("click", function(){
        buttonOperation.style.backgroundColor = "lightgrey";
        nameOperation = buttonOperation.className;
        addNumber();
        })
    
        buttonOrange();
}
operation(buttonPlus);
operation(buttonMinus);
operation(buttonMultiply);
operation(buttonDivide);



//Permet de donner le résultat suivant l'opération qu'on a effectué
function egale() {
    buttonEgale.addEventListener("click", function(){
        buttonEgale.style.backgroundColor = "lightgrey";
        tableResultat.push(parseInt(maDivResultatCache.textContent));
        console.log(tableResultat);
        maDivResultatCache = 0;
        if(nameOperation.includes("addition")){
            isButtonPlusClicked = true;
            for(i = 0; i < tableResultat.length; i++){
                if(lastResultat != 0){
                    maDivResultatCache = lastResultat;
                    maDivResultatCache += tableResultat[i];
                } else {
                    maDivResultatCache += tableResultat[i];
                }
            }
        }else if(nameOperation.includes("soustraction")){
            isButtonMinusClicked = true;
            for(i = 0; i < tableResultat.length; i++){
                if(i !== tableResultat.length-1){
                    maDivResultatCache = tableResultat[i] - tableResultat[i+1];
                }
            }
        }else if(nameOperation.includes("multiplication")){
            maDivResultatCache = 1;
            for(i = 0; i < tableResultat.length; i++){
                if(lastResultat != 0){
                    maDivResultatCache = lastResultat;
                    maDivResultatCache *= tableResultat[i];
                }else {
                    maDivResultatCache *= tableResultat[i];
                }
            }
        }else if(nameOperation.includes("division")){
            //maDivResultatCache = 0;
            for(i = 0; i < tableResultat.length; i++){
                if(i !== tableResultat.length-1){
                    maDivResultatCache += tableResultat[i] / tableResultat[i+1];
                    }
            }
        }
        maDivResultat.innerHTML = maDivResultatCache;
        lastResultat = maDivResultatCache;
        console.log(lastResultat);
        console.log(maDivResultatCache);
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


