export function FilterOptions() {
  const d = document,
    $select = d.createElement("div");

  $select.classList.add("select-flag");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".mainFilter *") || e.target.matches(".mainFilter")) {
      d.querySelector(".filterRegionArrow").classList.toggle("rotate");
      d.querySelector(".options").classList.toggle("none");
    }

    if (e.target.matches(".deleteFilter")) {
      d.querySelectorAll("[data-id]").forEach((el) => {
        el.classList.remove("filter");
        d.querySelector(".deleteFilter").classList.add("none");
        document.querySelector(".mainFilter p").textContent =
          "Filter by Region";
      });
    }

    if (e.target.matches(".country")) {
      console.info(e.target.textContent);
      d.querySelector(".options").classList.add("none");
      d.querySelector(".deleteFilter").classList.remove("none");

      d.querySelectorAll("[data-id]").forEach((el) => {
        el.dataset.id === e.target.textContent
          ? el.classList.remove("filter")
          : el.classList.add("filter");
        document.querySelector(".mainFilter p").textContent =
          e.target.textContent;
      });
    }
  });

  d.addEventListener("keyup", (e) => {
    let Allflags = Array.from(d.querySelectorAll("[data-name]"));

    let filtroIgual = Allflags.filter((flag) =>
      flag.dataset.name.includes(e.target.value)
    );
    let NoIgual = Allflags.filter(
      (flag) => !flag.dataset.name.includes(e.target.value)
    );
    if (e.key === "Escape") {
      e.target = "";
    }

    if (filtroIgual.length === 0) {
      NoIgual.forEach((flag) => {
        flag.classList.add("filter");
      });

      document.querySelector(".error").classList.remove("none");
    } else {
      document.querySelector(".error").classList.add("none");
      filtroIgual.forEach((flag) => {
        flag.classList.remove("filter");
      });

      NoIgual.forEach((flag) => {
        flag.classList.add("filter");
      });
    }
    // }
    // console.info(coincidencias);
    //   el.classList.remove("filter");
    // } else {
    //   el.classList.add("filter");
    //   setTimeout(() => {
    //     document.getElementById(
    //       "containerFlags"
    //     ).innerHTML = `<h2>Not Fouund <a href="http://127.0.0.1:5500/">Back to Home</a></h2>`;
    //   }, 3000);
  });
  $select.innerHTML = `
  <div class="mainFilter" data-dark = "darkMode">
  
  <p>Filter by Region</p>
  <span class="filterRegionArrow"></span>
  
  </div>
  <span class="none deleteFilter">Clear Filter</span>
 <div class="options none" data-dark = "darkMode">
  <p class="country">Africa</p>
  <p class="country" >Americas</p>
  <p class="country">Asia</p>
  <p class="country">Europe</p>
  <p class="country">Oceania</p>
  </div>
  `;

  return $select;
}
