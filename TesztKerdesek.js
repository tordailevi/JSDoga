import { szenvedoMondatok } from "./angol.js";
import TesztKerdes from "./TesztKerdes.js"



let szuloElem = document.querySelector(".tarolo")


for (let index = 2; index < szenvedoMondatok.length; index++) {
    new TesztKerdes(szuloElem,szenvedoMondatok[index],index,szenvedoMondatok.valasztas)
}

window.addEventListener("valasztas", (event)=>[
    
])