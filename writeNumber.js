let maDivResultat = document.querySelector(".resultat p");
let monResultat = maDivResultat.innerHTML;

let boutonNombre = document.querySelector(".nombre");

let numbreAfficher;

function writeNumber() {
        if(maDivResultat.textContent == 0) {
                maDivResultat.innerHTML = "";
                
                boutonNombre.setAttribute("onclick", "writeNumber()");
        }

        let maDiv = document.querySelector(".nombre p");
        let monChiffre = maDiv.innerHTML;

        numbreAfficher = monChiffre;
        monResultat = numbreAfficher;
        maDivResultat.innerHTML += numbreAfficher;
        if(maDivResultat.textContent.length >= 9) {
                //let calculExposent;
                //calculExposent = Math.pow(parseInt(maDivResultat.textContent), maDivResultat.textContent.length);
                boutonNombre.removeAttribute("onClick");
        }
        console.log(monResultat);
}



function eraseNumber() {
        return maDivResultat.textContent = 0;
}


