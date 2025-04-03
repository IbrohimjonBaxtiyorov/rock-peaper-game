import { elGameZone, elHand, elRefresh, elSecondgameZone } from "./html-elements.js";
import { refreshGame } from "./refreshgame.js";
import { robotChooser } from "./robot-chooser.js";
import { sectionSwapper } from "./section-swapper.js";
import { uiChanger } from "./ui-changer.js";


elHand.forEach((element)=>{
    element.addEventListener("click",(e)=>{
       uiChanger(e.target.alt)
       sectionSwapper(true)
    })
})

elRefresh.addEventListener("click", ()=>{
    refreshGame()
})
