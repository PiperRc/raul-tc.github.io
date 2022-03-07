export function FilterOptions() {
  const d = document,
    $select = d.createElement("div");

  $select.classList.add("select-flag");

  d.addEventListener("click", (e) => {
    //  console.info(e.target);
    if (e.target.matches(".mainFilter *") || e.target.matches(".mainFilter")) {
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
    if (e.key === "Escape") {
      e.target.value = "";
    }

    d.querySelectorAll("[data-id]").forEach((el) => {
      d.querySelector(".options").classList.remove("deleteFilter");
      el.dataset.name.includes(e.target.value);

      if (el.dataset.name.includes(e.target.value)) {
        el.classList.remove("filter");
      } else {
        el.classList.add("filter");
      }
    });
  });
  $select.innerHTML = `
  <div class="mainFilter" data-dark = "darkMode">
  
  <p>Filter by Region</p>
  <img src="app/assets/arrowMenuBlack.svg" alt="" srcset="">
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
