let boutonPlus = document.querySelector(".addition");

let tableResultat = [];

function addition(){
    boutonPlus.addEventListener("click", function(){
        boutonPlus.style.backgroundColor = "lightgrey";
        tableResultat.push(maDivResultatCache[0]);
        console.log(maDivResultatCache.textContent);
    })
}