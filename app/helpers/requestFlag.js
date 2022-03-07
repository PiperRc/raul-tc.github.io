export async function requestFlag(props) {
  let { url, cbSuccess } = props;
  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))

    //   json.forEach((country) => {
    //     $template.querySelector(".ss").src = country.flags.svg;
    //     $template.querySelector("h2").textContent =
    //       country.translations.spa.common;
    //     $template.querySelector(
    //       "p"
    //     ).innerHTML = `<b>Región</b>: ${country.region}`;
    //     $template.querySelector("span").textContent = "Languages";
    //     $template.querySelector(
    //       ".population"
    //     ).innerHTML = `<b>Population</b>: ${country.population}`;

    //     if (country.languages === undefined) {
    //       $template.querySelector("ul").textContent = "Indefinido";
    //     } else {
    //       let lenguaje = country.languages;

    //       let $li = "";

    //       for (const property in lenguaje) {
    //         $li += `<li> ${lenguaje[property]} </li>`;
    //       }
    //       $template.querySelector("ul").innerHTML = $li;
    //       $template.querySelector(".container-main").dataset.id =
    //         country.translations.spa.common;
    //     }

    //     let clone = d.importNode($template, true);
    //     $fragment.appendChild(clone);
    //   });

    //   $main.appendChild($fragment);
    // })
    .catch((err) => {
      console.info(err);
      let message = err.statusText || "Occurió un error al acceder a la API";
      document.getElementById("containerFlags").innerHTML = `<div class="error">
      <p>Error ${err.status} : ${message} </p>
      </div>`;
      document.querySelector(".loader").style.display = "none";
    });
}
