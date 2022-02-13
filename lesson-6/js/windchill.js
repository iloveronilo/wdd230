let speed = 25;
let temp = 10;
buildWindChill(speed, temp);

function buildWindChill(speed, temp) {
    // Compute windchill
    let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16)
    + 0.4275 * temp * Math.pow(speed,0.16);

    // Round the answer down to integer
    windChill = Math.floor(windChill);

    // if chill is greater than temp, return the temp
    windChill = (windChill > temp) ? temp : windChill;

    feelTemp.innerHTML = windChill;
}