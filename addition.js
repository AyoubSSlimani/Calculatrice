let boutonPlus = document.querySelector(".addition");

// Permet de savoir si un bouton à été cliqué
let isButtonEraseClicked = false;
let isButtonNombresClicked = false;

let tableResultat = [];

let eraseButton = document.querySelector(".eraseButton");


function addition(){

    boutonPlus.addEventListener("click", function(){
        boutonPlus.style.backgroundColor = "lightgrey";
        tableResultat.push(maDivResultatCache[0]);
        console.log(maDivResultatCache.textContent);
    })


    if(isButtonEraseClicked == true){
        eraseButton.addEventListener('click', function(){
            boutonPlus.style.backgroundColor = "#ff9f0a";
            isButtonEraseClicked = false;
        })
    } else if(isButtonNombresClicked == true){
        for(const nombre of nombres){
            nombre.addEventListener('click', function(){
                boutonPlus.style.backgroundColor = "#ff9f0a";
                isButtonNombresClicked = false;
            })
            }
    }
}