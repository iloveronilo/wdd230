const speed = 2.5;
const temp = 10;
const tempDegree = 33;
const tempName = "Partly Cloudy";

let tn = document.getElementById("tempName");
tn.textContent = `${tempName}`;

let td = document.getElementById("tempDegree");
td.textContent = `${tempDegree}℃`

let windSpeed = document.getElementById("windSpeed");
windSpeed.innerHTML = `Wind Speed : ${speed} km/h`;

let wc = document.getElementById("windChill");
wc.innerHTML = `wind chill : ${buildWindChill(speed)}`;

function buildWindChill(speed, temp) {
    // Compute windchill
    let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16)
    + 0.4275 * temp * Math.pow(speed,0.16);
    // Round the answer down to integer
    windChill = Math.floor(windChill);

    // if chill is greater than temp, return the temp
    windChill = (windChill > temp) ? temp : windChill;

    wc.innerHTML = windChill;
    console.log(windChill);
    return windChill;
}