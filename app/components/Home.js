import { FilterOptions } from "./FilterOptions.js";
import { SearchFlag } from "./SearchFlag.js";

export async function Home() {
  document.getElementById("main").appendChild(SearchFlag());
  document.getElementById("main").appendChild(FilterOptions());
}
