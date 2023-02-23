//Je récupère l'affichage de la calculatrice
let maDivResultat = document.querySelector(".resultat p");
let monResultat = maDivResultat.innerHTML;

let maDivResultatCache = 0;
let lastResultat = 0;
let tableResultat = [];

//Je récupère les touches de la calculatrice
let nombres = document.querySelectorAll(".nombre"); 
let buttonErase = document.querySelector(".eraseButton");
let buttonVrigule = document.querySelector(".virgule");

let isButtonVirguleClicked = false;
let limitNumber = false;

//Fonction qui permet de détecter sur quel nombre on click et qui affiche ce nombre 
function writeNumber(){
        for(const nombre of nombres){
        
        nombre.addEventListener("click", function() {
                if(!limitNumber){
                        if(maDivResultat.textContent == 0) {
                                maDivResultat.innerHTML = "";
                        } else if(isButtonPlusClicked || isButtonMultiplyClicked || isButtonMinusClicked || isButtonDivideClicked){
                                maDivResultat.innerHTML = "";
                                
                                isButtonPlusClicked = false;
                                isButtonMultiplyClicked = false;
                                isButtonMinusClicked = false;
                                isButtonDivideClicked = false;
                                
                        } else if(maDivResultat.textContent.length >= 8){
                                limitNumber = true;
                        }        
                                        
                        isButtonNumberClicked = true;
                                
                        monResultat = nombre.textContent.trim();
                        /*
                        console.log(maDivResultat.textContent.length);
                        if(maDivResultat.textContent.length = 3 || maDivResultat.textContent.length >= 9){
                                maDivResultat.innerHTML += " ";
                        }
                        */
                        addVirgule();
                        maDivResultat.innerHTML += monResultat;  
                        } else if(limitNumber && isButtonOperationClicked){
                                monResultat = nombre.textContent.trim();
                                maDivResultat.innerHTML += monResultat; 
                                maDivResultat.innerHTML = "";
                                limitNumber = false;
                                isButtonOperationClicked = false;
                }

                }
                )
        }
}

writeNumber();

//Fonction qui permet d'ajouter des nombres lorsque l'on appuye sur une touche du clavier
function writeKeyBoard(){
        document.addEventListener("keydown", (event) => {
                const nomTouche = event.key;
                if(!isNaN(nomTouche)){
                        if(limitNumber === false){
                                if(maDivResultat.textContent == 0) {
                                        maDivResultat.innerHTML = "";
                                } else if(isButtonPlusClicked || isButtonMultiplyClicked || isButtonMinusClicked || isButtonDivideClicked){
                                        maDivResultat.innerHTML = "";
                                        
                                        isButtonPlusClicked = false;
                                        isButtonMultiplyClicked = false;
                                        isButtonMinusClicked = false;
                                        isButtonDivideClicked = false;
                                        isButtonVirguleClicked = false;
                                        
                                } else if(maDivResultat.textContent.length >= 8){
                                        limitNumber = true;
                                }        
                                                
                                isButtonNumberClicked = true;
                                        
                                maDivResultat.innerHTML += nomTouche; 
                                }
                }
        })
}
writeKeyBoard();

//Fonction permettant d'ajouter un "-" devant un chiffre
function negatifOrPositif(){
        let negatifPositif = document.querySelector(".signe");
        let minus = "-1";
        let plus = "1";

        negatifPositif.addEventListener("click", function(){
                if(maDivResultat.textContent >= 1){
                        maDivResultat.textContent = minus * maDivResultat.textContent;
                } else {
                        maDivResultat.textContent = plus * minus * maDivResultat.textContent;
                }
        })
}
negatifOrPositif();

//Ajout d'une virgule après un nombre
function addVirgule(){
        buttonVrigule.addEventListener("click", function(){
                if(!isButtonVirguleClicked){
                        maDivResultat.textContent = maDivResultat.textContent + ".";
                        isButtonVirguleClicked = true;
                }
        })        
}


//Fonction qui permet d'effacer l'affichage et de le remettre à zéro
function eraseNumber() {
        buttonErase.addEventListener("click", function(){
                isButtonEraseClicked = true;
                isButtonNumberClicked = false;
                isButtonPlusClicked = false;
                isButtonMinusClicked = false;
                isButtonMultiplyClicked = false;
                isButtonDivideClicked = false;
                isButtonEgaleClicked = false;
                isButtonOperationClicked = false;
                isButtonVirguleClicked = false;
                limitNumber = false;
                tableResultat = [];
                lastResultat = 0;
                return maDivResultat.innerHTML = "0";
        })
}

eraseNumber();