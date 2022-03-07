import { ButtonDarkMode } from "./ButtonDarkMode.js";
import { Title } from "./Title.js";

export function Header() {
  const $header = document.createElement("header");

  $header.dataset.dark = "darkMode";
  $header.appendChild(Title());
  $header.appendChild(ButtonDarkMode());

  return $header;
}
