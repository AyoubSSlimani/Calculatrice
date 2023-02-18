//Je récupère l'affichage de la calculatrice
let maDivResultat = document.querySelector(".resultat p");
let monResultat = maDivResultat.innerHTML;

let maDivResultatCache = 0;
let lastResultat = 0;
let tableResultat = [];

//Je récupère les touches de la calculatrice
let nombres = document.querySelectorAll(".nombre"); 
let buttonErase = document.querySelector(".eraseButton");

let limitNumber = false;

//Fonction qui permet de détecter sur quel nombre on click et qui affiche ce nombre 
function writeNumber(){
        for(const nombre of nombres){
        
        nombre.addEventListener("click", function() {
                if(limitNumber === false){
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
                                        
                        isButtonNombresClicked = true;
                                
                        monResultat = nombre.textContent.trim();
                        maDivResultat.innerHTML += monResultat;  
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
                                        
                                } else if(maDivResultat.textContent.length >= 8){
                                        limitNumber = true;
                                }        
                                                
                                isButtonNombresClicked = true;
                                        
                                maDivResultat.innerHTML += nomTouche; 
                                }
                }
        })
}
writeKeyBoard();

//Fonction qui permet d'effacer l'affichage et de le remettre à zéro
function eraseNumber() {
        buttonErase.addEventListener("click", function(){
                isButtonEraseClicked = true;
                isButtonNombresClicked = false;
                isButtonPlusClicked = false;
                isButtonMinusClicked = false;
                isButtonMultiplyClicked = false;
                isButtonDivideClicked = false;
                isButtonEgaleClicked = false;
                limitNumber = false;
                tableResultat = [];
                lastResultat = 0;
                return maDivResultat.innerHTML = "0";
        })
}

eraseNumber();