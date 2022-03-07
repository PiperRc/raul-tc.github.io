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
  console.info(hash);
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
        DarkMode();
        document.querySelector(".loader").style.display = "none";
      },
    });
  } else {
    let urlCountry = hash.substring(2).toLocaleLowerCase();
    $main.appendChild(ContainerFlags());
    //const $containerFlag = d.getElementById("containerFlags");

    requestFlag({
      url: `https://restcountries.com/v3.1/name/${urlCountry}`,
      cbSuccess: (flagData) => {
        $main.innerHTML = Flag(flagData[0]);
        DarkMode();
        document.querySelector(".loader").style.display = "none";
      },
    });
    document.querySelector(".loader").style.display = "none";
  }
}
