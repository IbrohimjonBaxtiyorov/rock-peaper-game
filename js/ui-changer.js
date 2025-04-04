import { findWinner } from "./find-winner.js";
import { elRefresh, elRobot, elScore, elStatus, elUser } from "./html-elements.js";
import { robotChooser } from "./robot-chooser.js";

elRefresh.addEventListener('click',()=>{
    elUser.style.boxShadow='';
    elRobot.style.boxShadow=''
})
export function uiChanger(variant) {
  elUser.src = `./img/${variant}.svg`;

  setTimeout(() => {
    const robot = robotChooser();
    elRobot.src = `./img/${robot}.svg`;

    const winner = findWinner(variant, robot);
    let count = parseInt(sessionStorage.getItem("count")) || 0;

    if (winner === "tied") {
      elStatus.innerText = "TIED";
    } else if (winner === "user") {
      elStatus.innerText = "YOU WIN";
      count++;
      elUser.style.boxShadow = "0px 0px 0px 50px rgba(255, 255, 255, 0.05), 0px 0px 0px 100px rgba(255, 255, 255, 0.05), 0px 0px 0px 150px rgba(255, 255, 255, 0.05)";
    } else {
      elStatus.innerText = "YOU LOSE";
      elRobot.style.boxShadow = "0px 0px 0px 50px rgba(255, 255, 255, 0.05), 0px 0px 0px 100px rgba(255, 255, 255, 0.05), 0px 0px 0px 150px rgba(255, 255, 255, 0.05)";
   
      if (count >= 1) {
        count--;
      } else {
        count;
      }
    }
    elScore.innerText = count;
    sessionStorage.setItem("count", count);
  }, 1000);
}
