export async function requestFlag(props) {
  let { url, cbSuccess } = props;
  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      console.info(err);
      let message = err.statusText || "Occurió un error al acceder a la API";
      document.getElementById("containerFlags").innerHTML = `<div class="error">
      <p>Error ${err.status} : ${message} </p>
      </div>`;
      document.querySelector(".loader").style.display = "none";
    });
}
