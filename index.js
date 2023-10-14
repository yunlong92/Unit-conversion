/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function () {
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meter = ${Number(baseValue * meterToFeet).toFixed(3)} | ${baseValue}feet = ${Number(baseValue / meterToFeet).toFixed(3)} `

    volumeEl.textContent = `${baseValue} liter = ${Number(baseValue * literToGallon).toFixed(3)} | ${baseValue}gallon = ${Number(baseValue / literToGallon).toFixed(3)} `

    massEl.textContent = `${baseValue} kilo = ${Number(baseValue * kiloToPound).toFixed(3)} | ${baseValue}pound = ${Number(baseValue / kiloToPound).toFixed(3)} `

}
)