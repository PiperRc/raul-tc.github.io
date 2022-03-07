export function DarkMode() {
  const d = document,
    ls = localStorage,
    $selectors = d.querySelectorAll("[data-dark]"),
    $iconBtn = d.querySelector(".dark_mode"),
    $containerButton = d.querySelector(".container_button");
  let moon = `<img class="dark_mode" src="app/assets/moon.svg"> <p>Dark Mode</p>`;
  let sun = `<img class="dark_mode" src="app/assets/sun.svg">  <p>Light Mode</p>`;

  console.info($selectors);
  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove("classDark"));

    $containerButton.innerHTML = moon;
    // document.querySelector(
    //   ".backHome"
    // ).innerHTML = `<img src="app/assets/arrowLeft.svg" alt=""> <p>Back</p>`;
    ls.setItem("theme", "light");

    document
      .querySelectorAll(".bordeCountry span")
      .classList.remove("classDark");
  };
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add("classDark"));
    $containerButton.innerHTML = sun;
    // document.querySelector(
    //   ".backHome"
    // ).innerHTML = `<img src="app/assets/arrowLeftWhite.svg" alt=""> <p>Back</p>`;

    // document.querySelectorAll(".bordeCountry span").classList.add("classDark");
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    console.info(e.target);
    if (
      e.target.matches(".container_button img") ||
      e.target.matches(".container_button *")
    ) {
      if ($containerButton.innerHTML === moon) {
        document.querySelector("body").classList.add("classDark");
        darkMode();
      } else {
        document.querySelector("body").classList.remove("classDark");
        lightMode();
      }
    }
  });

  if (ls.getItem("theme") === null) {
    ls.setItem("theme", "light");
  }
  if (ls.getItem("theme") === "light" && location.hash !== "") {
    document.querySelector("body").classList.remove("classDark");

    lightMode();
  }

  if (ls.getItem("theme") === "dark" && location.hash !== "") {
    document.querySelector("body").classList.add("classDark");
    document.querySelector(
      ".backHome"
    ).innerHTML = `<img src="app/assets/arrowLeftWhite.svg" alt=""> <p>Back</p>`;
    darkMode();
  }
}
