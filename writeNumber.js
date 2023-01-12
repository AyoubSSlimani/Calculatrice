let maDivResultat = document.querySelector(".resultat p");
let monResultat = maDivResultat.innerHTML;

let maDivResultatCache = maDivResultat;

let nombres = document.querySelectorAll(".nombre");

function writeNumber() {

        if(maDivResultat.textContent == 0) {
                //console.log("un click");
                maDivResultat.innerHTML = "";
        }
        //console.log(maDivResultat.textContent);

        for(const nombre of nombres){
                nombre.addEventListener('click', function(){
                        monResultat = nombre.textContent.trim();
                        //console.log(monResultat);
                        //console.log(tableResultat);
                })
                }
                maDivResultat.innerHTML += monResultat;        
        
                if(maDivResultat.textContent.length >= 9) {
                for(nombre of nombres){
                        nombre.removeAttribute("onclick");
                }
        }
        }




function eraseNumber() {
        for(nombre of nombres){
                nombre.setAttribute("onclick", "writeNumber()");
        }
        return maDivResultat.textContent = "0";
}

