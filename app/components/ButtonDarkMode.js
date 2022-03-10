export function ButtonDarkMode() {
  const $containerButton = document.createElement("button"),
    $text = document.createElement("span"),
    $button = document.createElement("img");

  $containerButton.classList.add("container_button");
  $button.classList.add("dark_mode");

  $containerButton.value = `Dark Mode`;

  $button.src = "app/assets/moon.svg";
  $button.alt = "moonDarkModeOption";

  $containerButton.appendChild($button);
  //$containerButton.appendChild($text);

  return $containerButton;
}
