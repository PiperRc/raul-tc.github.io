export function ButtonDarkMode() {
  const $containerButton = document.createElement("button"),
    $text = document.createElement("p"),
    $button = document.createElement("img");

  $containerButton.classList.add("container_button");
  $button.classList.add("dark_mode");

  $text.textContent = `Dark Mode`;

  $button.src = "app/assets/moon.svg";
  $button.alt = "moonDarkModeOption";

  $containerButton.appendChild($button);
  $containerButton.appendChild($text);

  return $containerButton;
}
