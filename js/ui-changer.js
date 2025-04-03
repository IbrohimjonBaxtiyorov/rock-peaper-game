import { findWinner } from "./find-winner.js";
import { elRobot, elStatus, elUser } from "./html-elements.js";
import { robotChooser } from "./robot-chooser.js";

export function uiChanger(variant){
    elUser.src =`./img/${variant}.svg`;
    setTimeout(()=>{
        const robot=robotChooser()
        elRobot.src=`./img/${robot}.svg`;
        const winner=findWinner(variant ,robot);
      
        if(winner==='tied'){
            elStatus.innerText="TIED"
        }else if(winner==='user'){
            elStatus.innerText="YOU WIN"
            elUser.classList.add("shadow-blur", "duration-300", "rounded-full");
        }else{
            elStatus.innerText="YOU LOSE"
            elRobot.classList.add("shadow-blur", "duration-300", "rounded-full");
        }

    },1000)
}