export function FilterOptions() {
  const d = document,
    $select = d.createElement("div");

  $select.classList.add("select-flag");

  d.addEventListener("click", (e) => {
    //  console.info(e.target);
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
    e.stopPropagation();
    if (e.key === "Escape") {
      e.target.value = "";
    }

    let coincidencias = 0;
    d.querySelectorAll("[data-id]").forEach((el) => {
      el.dataset.name;
      console.info(el.dataset.name.includes(e.target.value));
      if (el.dataset.name.includes(e.target.value)) {
        coincidencias += 1;
        el.classList.remove("filter");
      } else {
        el.classList.add("filter");
        if (coincidencias === 0) {
        }
      }
      // console.info(coincidencias);
      //   el.classList.remove("filter");
      // } else {
      //   el.classList.add("filter");
      //   setTimeout(() => {
      //     document.getElementById(
      //       "containerFlags"
      //     ).innerHTML = `<h2>Not Fouund <a href="http://127.0.0.1:5500/">Back to Home</a></h2>`;
      //   }, 3000);
      // }
    });
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
