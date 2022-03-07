import { requestFlag } from "../helpers/requestFlag.js";

export function BorderCountry(props) {
  let { borders } = props;

  const getBorder = async () => {
    if (!borders) {
      document.querySelector(
        ".bordeCountry"
      ).innerHTML = `<span data-dark="darkMode">None</span>`;
    } else {
      let data = "";
      borders.forEach(async (border) => {
        await requestFlag({
          url: `https://restcountries.com/v3.1/alpha/${border}`,
          cbSuccess: (abc) => {
            data += `<span data-dark="darkMode">${abc[0].name.common}</span>`;
            console.info(data);
            document.querySelector(".bordeCountry").innerHTML = data;
          },
        });
        //return data;
      });
      getBorder();
    }
  };
}
