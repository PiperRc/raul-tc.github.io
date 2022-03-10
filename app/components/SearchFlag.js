export function SearchFlag() {
  const $searchContainer = document.createElement("div");

  $searchContainer.classList.add("searchCountry");
  $searchContainer.dataset.dark = "darkMode";
  $searchContainer.innerHTML = `
    <img src="app/assets/search.svg" alt="search-image"  data-dark="darkMode">
    <input type="search" name="Search" id="btn-search" placeholder="Search for a country..." data-dark="darkMode" autocomplete="off">
    `;

  return $searchContainer;
}
