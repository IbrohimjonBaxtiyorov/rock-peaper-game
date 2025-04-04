import { findWinner } from "./find-winner.js";
import { elRobot, elScore, elStatus, elUser } from "./html-elements.js";
import { robotChooser } from "./robot-chooser.js";

export function uiChanger(variant){
    elUser.src =`./img/${variant}.svg`;

    setTimeout(()=>{
        const robot=robotChooser()
        elRobot.src=`./img/${robot}.svg`;

        const winner=findWinner(variant ,robot);
        let count=parseInt(sessionStorage.getItem('count'))||0;
     
        if(winner==='tied'){
            elStatus.innerText="TIED"
        }else if(winner==='user'){
            elStatus.innerText="YOU WIN"
             count++  }
        else{
            elStatus.innerText="YOU LOSE"
            if(count >= 1){
                count--;
            }else{
                count
            }
           
        }
        elScore.innerText=count;
        sessionStorage.setItem("count" ,count)

    },1000)
}