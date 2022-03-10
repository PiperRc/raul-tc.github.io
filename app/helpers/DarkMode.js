export function DarkMode() {
  const d = document,
    ls = localStorage,
    $containerButton = d.querySelector(".container_button");
  let moon = `<img class="dark_mode" src="app/assets/moon.svg" alt="moonDarkModeOption"> Dark Mode`;
  let sun = `<img class="dark_mode" src="app/assets/sun.svg" alt ="SunLightModeOption"> Light Mode`;

  const lightMode = () => {
    $containerButton.innerHTML = moon;

    ls.setItem("theme", "light");
  };
  const darkMode = () => {
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
  }

  if (ls.getItem("theme") === "dark") {
    document.querySelector("body").classList.add("classDark");

    darkMode();
  }
}
