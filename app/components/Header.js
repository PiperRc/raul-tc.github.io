import { ButtonDarkMode } from "./ButtonDarkMode.js";
import { Title } from "./Title.js";

export function Header() {
  const $header = document.createElement("header"),
    $content = document.createElement("div");

  $content.classList.add("containerheader");
  $header.dataset.dark = "darkMode";

  $content.appendChild(Title());
  $content.appendChild(ButtonDarkMode());
  $header.appendChild($content);

  return $header;
}
