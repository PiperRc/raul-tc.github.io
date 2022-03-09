export function Flags(props) {
  let { flags, name, population, region, capital, altSpellings } = props;

  const givenNumber = population;

  let internationalNumberFormat = new Intl.NumberFormat("en-US");

  return `
  <div class="flag" data-id="${region}" data-name="${
    name.common
  }" data-dark = "darkMode">

  <div class="flag_image"  data-dark = "darkMode">
 <a href="#/${altSpellings[0]}"><img src="${flags.png}" alt="${
    name.common
  }_flag"></a> 
  </div>

  <div class="flag_short__description"  data-dark = "darkMode">

  <h2 class = "title_flag"  data-dark = "darkMode">
  ${name.common}
  </h2>
  
  <div class="flag_description" data-dark="darkMode">
  <p><b>Population</b>: ${internationalNumberFormat.format(givenNumber)}</p>
   <p><b>Region</b>: ${region}</p>
 <p><b>Capital</b>: ${capital}</p>
  </div>

  </div>


  </div>
  
  `;
}
