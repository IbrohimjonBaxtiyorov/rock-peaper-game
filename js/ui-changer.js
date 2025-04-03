import { elRobot, elUser } from "./html-elements.js";
import { robotChooser } from "./robot-chooser.js";

export function uiChanger(variant){
    elUser.src =variant;
    setTimeout(()=>{
        elRobot.src=`./img/${robotChooser()}.svg`
    },1000)
}