import { App } from "./App.js";
import { DarkMode } from "./helpers/DarkMode.js";

document.addEventListener("DOMContentLoaded", (e) => {
  App();
  DarkMode();
});
window.addEventListener("hashchange", (e) => {
  App();
  DarkMode();
});
