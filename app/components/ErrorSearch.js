export function ErrorSearch() {
  const $containerError = document.createElement("section");

  $containerError.classList.add("error", "none");
  $containerError.innerHTML = `
<h2> Country not found 😞.</h2>

  `;
  return $containerError;
}
