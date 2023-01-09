let maDivResultat = document.querySelector(".resultat p");
let monResultat = maDivResultat.innerHTML;

let boutonNombre = document.querySelector(".nombre");

let numbreAfficher;

function writeNumber() {
        if(maDivResultat.textContent == 0) {
                maDivResultat.innerHTML = "";
        }

        let maDiv = document.querySelector(".nombre p");
        let monChiffre = maDiv.innerHTML;

        numbreAfficher = monChiffre;
        monResultat = numbreAfficher;
        maDivResultat.innerHTML += numbreAfficher;

        eraseFunctionUsed = false;
        if(maDivResultat.textContent.length >= 9) {
                //let calculExposent;
                //calculExposent = Math.pow(parseInt(maDivResultat.textContent), maDivResultat.textContent.length);
                boutonNombre.removeAttribute("onclick");
        }
}

let eraseFunctionUsed = false;


function eraseNumber() {
        eraseFunctionUsed = true;
        boutonNombre.setAttribute("onclick", "writeNumber()");
        return maDivResultat.textContent = 0;
}
