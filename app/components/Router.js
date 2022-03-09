import { DarkMode } from "../helpers/DarkMode.js";
import { requestFlag } from "../helpers/requestFlag.js";
import { ContainerFlags } from "./ContainerFlags.js";
import { Flag } from "./Flag.js";
import { Flags } from "./Flags.js";
import { Home } from "./Home.js";

export function Router() {
  const d = document,
    $main = d.getElementById("main");

  let { hash } = location;
  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    Home();
    $main.appendChild(ContainerFlags());
    const $containerFlag = d.getElementById("containerFlags");
    requestFlag({
      url: "https://restcountries.com/v3.1/all",
      cbSuccess: (flags) => {
        let htmlContent = "";
        flags.forEach((flag) => {
          htmlContent += Flags(flag);

          $containerFlag.innerHTML = htmlContent;
        });
        // DarkMode();
        document.querySelector(".loader").style.display = "none";
      },
    });
  } else {
    let urlCountry = hash.substring(2).toLocaleLowerCase();
    $main.appendChild(ContainerFlags());
    //const $containerFlag = d.getElementById("containerFlags");

    requestFlag({
      url: `https://restcountries.com/v3.1/name/${urlCountry}?fullText=true`,
      cbSuccess: (flagData) => {
        $main.innerHTML = Flag(flagData[0]);
        document.querySelector(".loader").style.display = "none";
      },
    });
    //DarkMode();
    // document.querySelector(".loader").style.display = "none";
  }
}
