import {
  elGameZone,
  elGameZoneInner,
  elHand,
  elLogo,
  elModeChanger,
  elRefresh,
  elRules,
  elRulesImage,
  elRulesModal,
  elSecondgameZone,
} from "./html-elements.js";
import { refreshGame } from "./refreshgame.js";
import { robotChooser } from "./robot-chooser.js";
import { sectionSwapper } from "./section-swapper.js";
import { uiChanger } from "./ui-changer.js";

elHand.forEach((element) => {
  element.addEventListener("click", (e) => {
    uiChanger(e.target.alt);
    sectionSwapper(true);
  });
});

elRefresh.addEventListener("click", () => {
  refreshGame();
});

elModeChanger.addEventListener("click", () => {
  const mode = elGameZoneInner.dataset.mode;
  if (mode === "simple") {
    elGameZoneInner.dataset.mode = "advanced";
    elRulesImage.src = "../img/rule-advanced.svg";
    elLogo.src ="../img/advanced-logo.svg"
    elModeChanger.innerText = "Simple";
  } else if (mode === "advanced") {
    elGameZoneInner.dataset.mode = "simple";
    elRulesImage.src = "../img/rule-basic.svg";
     elLogo.src ="../img/logo.svg.svg"
    elModeChanger.innerText = "Advanced";
  } else {
    elGameZoneInner.dataset.mode = "simple";
    elRulesImage.src = "../img/rule-basic.svg";
    elModeChanger.innerText = "Advanced";
  }
});

elRules.addEventListener("click", () => {
  elRulesModal.showModal();
});
