function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  if (losAngeles) {
    let losAngelesDate = losAngeles.querySelector(".date");
    let losAngelesTime = losAngeles.querySelector(".time");
    let losAngelesTimeZone = moment().tz("America/Los_Angeles");

    losAngelesDate.innerHTML = losAngelesTimeZone.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = losAngelesTimeZone.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }

  let paris = document.querySelector("#paris");
  if (paris) {
    let parisDate = paris.querySelector(".date");
    let parisTime = paris.querySelector(".time");
    let parisTimeZone = moment().tz("Europe/Paris");

    parisDate.innerHTML = parisTimeZone.format("MMMM Do YYYY");
    parisTime.innerHTML = parisTimeZone.format("h:mm:ss [<small>]A[</small]");
  }
}

function displayCity(event) {
  let selectedCityTimeZone = event.target.value;
  let selectedCityName = selectedCityTimeZone.replace("_", " ").split("/")[1];
  let selectedCityTime = moment().tz(selectedCityTimeZone);
  let displayedCities = document.querySelector("#displayed-cities");

  displayedCities.innerHTML = `<div class="city">
                <div>
                    <h2>${selectedCityName}</h2>
                    <div class="date">${selectedCityTime.format(
                      "MMMM Do YYYY"
                    )}</div>
                </div>
                <div class="time">${selectedCityTime.format(
                  "h:mm:ss [<small>]A[</small]"
                )}</div>
            </div>`;
}
updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", displayCity);
