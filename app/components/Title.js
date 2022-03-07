export function Title() {
  const $title = document.createElement("p");

  $title.textContent = "Where in the world?";

  $title.classList.add("header_title");
  return $title;
}
