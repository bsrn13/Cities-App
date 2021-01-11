import data from "./data.js"
import {createTableElements} from "./main.js";

document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

document.querySelector("#populationBigger").addEventListener("click", () => {
  const filterData = data.filter(cities => cities.population > 500000);
  createTableElements(filterData, "allcities");
})

document.querySelector("#landAreaLess").addEventListener("click", () => {
  const filterArea = data.filter(cities => cities.landArea < 1000 );
  createTableElements(filterArea, "allcities");
})

document.querySelector("#isPopulationLess").addEventListener("click", () => {
  const populationLEss = data.some(cities => cities.population < 100000);
  if (populationLEss) {
    alert ("YES");
  }
  else {
    alert ("NO");
  }
})

document.querySelector("#isLandBigger").addEventListener("click", () => {
  const landBigger = data.every(cities => cities.landArea > 100);
  if (landBigger) {
    alert ("YES");
  }
  else {
    alert("NO");
  }
})

document.querySelector("#cityselect").innerHTML = "<option selected>Select City</option>";

const cityName = data.map(cityName => cityName.name);
const selectCity = document.querySelector("#cityselect");
cityName.forEach((element) => {

  const newCity = document.createElement("option");
  newCity.setAttribute("value", element);
  newCity.innerHTML = element;
  selectCity.appendChild(newCity);
})

document.querySelector("#cityselect").addEventListener("click", (e) => {
  const selectedCities = data.filter(cities => e.target.value === cities.name);
  createTableElements(selectedCities, "singlecity");
})
