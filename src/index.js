function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTime = losAngeles.querySelector(".time");
  let losAngelesTimeZone = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = losAngelesTimeZone.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesTimeZone.format(
    "h:mm:ss [<small>]A[</small]"
  );
  let paris = document.querySelector("#paris");
  let parisDate = paris.querySelector(".date");
  let parisTime = paris.querySelector(".time");
  let parisTimeZone = moment().tz("Europe/Paris");

  parisDate.innerHTML = parisTimeZone.format("MMMM Do YYYY");
  parisTime.innerHTML = parisTimeZone.format("h:mm:ss [<small>]A[</small]");
}

updateTime();
setInterval(updateTime, 1000);
