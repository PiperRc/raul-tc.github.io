export function ChangeIcons() {
  const $Body = document.querySelector("body");

  let arrowFilterWhite = `<p>Filter by Region</p> <img src="app/assets/arrowMenuBlack.svg" alt="">`;
  let arrowFilterBlack = `<p>Filter by Region</p> <img src="app/assets/arrowMenuWhite.svg" alt="">`;
  if ($Body.className === "classDark") {
    console.info("Holiii");
    document.querySelector(".arrowBlack").classList.add("none");
    document.querySelector(".arrowWhite").classList.toggle("none");
    //   } else {
    //     console.info("no jala");
    //     document.querySelector(".arrowWhite").classList.add("none");
    //     document.querySelector(".arrowBlack").classList.remove("none");
    //   }
  }
}
