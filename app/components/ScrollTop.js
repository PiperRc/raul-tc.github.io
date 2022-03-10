export function ScrollTop() {
  const $element = document.createElement("span"),
    $childArrow = document.createElement("span");
  $childArrow.classList.add("scrollTop");
  $element.classList.add("containerArrowTop");
  $element.appendChild($childArrow);
  document.addEventListener("scroll", (e) => {
    console.info(window.scrollY);
    if (window.scrollY > 1000) {
      document.querySelector(".containerArrowTop").classList.add("visible");
      document.querySelector(".scrollTop").classList.add("visible");
      document.addEventListener("click", (e) => {
        if (
          e.target.matches(".containerArrowTop") ||
          e.target.matches(".containerArrowTop *")
        ) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }

    if (window.scrollY < 1000) {
      document.querySelector(".containerArrowTop").classList.remove("visible");
      document.querySelector(".scrollTop").classList.remove("visible");
    }
  });

  return $element;
}
