//Je récupère l'affichage de la calculatrice
let maDivResultat = document.querySelector(".resultat p");
let monResultat = maDivResultat.innerHTML;

let maDivResultatCache = maDivResultat;

//Je récupère les touches de la calculatrice
let nombres = document.querySelectorAll(".nombre"); 

let limitNumber = false;

for(const nombre of nombres){

        nombre.addEventListener("click", function() {
                if(limitNumber === false){
                        if(maDivResultat.textContent == 0) {
                                maDivResultat.innerHTML = "";
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


//Fonction qui permet d'effacer l'affichage et de le remettre à zéro
function eraseNumber() {
        isButtonEraseClicked = true;
        isButtonNombresClicked = false;
        limitNumber = false;
        return maDivResultat.textContent = "0";
}

