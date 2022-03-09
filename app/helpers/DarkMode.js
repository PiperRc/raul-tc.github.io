export function DarkMode() {
  const d = document,
    ls = localStorage,
    //  $selectors = d.querySelectorAll("[data-dark]"),
    $iconBtn = d.querySelector(".dark_mode"),
    $containerButton = d.querySelector(".container_button");
  let moon = `<img class="dark_mode" src="app/assets/moon.svg" alt="moonDarkModeOption"> <p>Dark Mode</p>`;
  let sun = `<img class="dark_mode" src="app/assets/sun.svg" alt ="SunLightModeOption"> <p>Light Mode</p>`;

  //  console.info($selectors);
  const lightMode = () => {
    //   $selectors.forEach((el) => el.classList.remove("classDark"));

    $containerButton.innerHTML = moon;

    ls.setItem("theme", "light");
  };
  const darkMode = () => {
    // $selectors.forEach((el) => el.classList.add("classDark"));
    $containerButton.innerHTML = sun;

    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    console.info(e.target);
    if (
      e.target.matches(".container_button") ||
      e.target.matches(".container_button p") ||
      e.target.matches(".dark_mode")
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
  if (ls.getItem("theme") === "light") {
    document.querySelector("body").classList.remove("classDark");
    lightMode();

    if (
      document.querySelector(".arrowBlack") ||
      document.querySelector(".arrowWhite")
    ) {
      document.querySelector(".arrowBlack").classList.remove("none");
      document.querySelector(".arrowWhite").classList.add("none");
    }

    if (
      document.querySelector(".arrowLeftDark") ||
      document.querySelector(".arrowLeftWhite ")
    ) {
      document.querySelector(".arrowLeftDark").classList.remove("none");
      document.querySelector(".arrowLeftWhite ").classList.add("none");
    }
  }

  if (ls.getItem("theme") === "dark") {
    document.querySelector("body").classList.add("classDark");

    darkMode();

    if (
      document.querySelector(".arrowBlack") ||
      document.querySelector(".arrowWhite")
    ) {
      document.querySelector(".arrowBlack").classList.add("none");
      document.querySelector(".arrowWhite").classList.remove("none");
    }

    if (
      document.querySelector(".arrowLeftDark") ||
      document.querySelector(".arrowLeftWhite ")
    ) {
      document.querySelector(".arrowLeftDark").classList.add("none");
      document.querySelector(".arrowLeftWhite ").classList.remove("none");
    }
  }
}
