import { elGameZone, elSecondgameZone } from "./html-elements.js";

export function sectionSwapper(boolean){
if(boolean){
    elGameZone.classList.add("hidden");
    elSecondgameZone.classList.remove("hidden");
}else{
    elGameZone.classList.remove("hidden");
    elSecondgameZone.classList.add("hidden");
}
    
}