export function ButtonDarkMode() {
  const $containerButton = document.createElement("div"),
    $text = document.createElement("p"),
    $button = document.createElement("img");

  $containerButton.classList.add("container_button");
  $button.classList.add("dark_mode");

  $text.innerHTML = `Dark Mode`;

  $button.src = "app/assets/moon.svg";

  $containerButton.appendChild($button);
  $containerButton.appendChild($text);

  return $containerButton;
}
