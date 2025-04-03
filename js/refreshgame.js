import { elRefresh, elRobot } from "./html-elements.js";
import { sectionSwapper } from "./section-swapper.js";

export function refreshGame(){
    elRobot.src="./img/oval.svg";
    sectionSwapper(false)
};