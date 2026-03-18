let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputTime = document.getElementById("time");

let result = document.getElementById("result");

function calculate() {
    console.log("Calculating...");

    let adults = parseInt(inputAdults.value) || 0;
    let children = parseInt(inputChildren.value) || 0;
    let time = parseInt(inputTime.value) || 0;

    let totalAmountBeef = beefPPerson(time) * adults + (beefPPerson(time) / 2 * children);
    let totalAmountBeer = beerPPerson(time) * adults;
    let totalAmountBeverage = beveragePPerson(time) * (adults + children);

    let totalPounds = ((totalAmountBeef / 1000) * 2.2).toFixed(2);

    let beefUnit = totalPounds <= 1 ? "pound" : "pounds";

    result.innerHTML = `<p>${totalPounds} ${beefUnit} of beef</p>`;
    result.innerHTML += `<p>${Math.ceil(totalAmountBeer / 355)} Cans of Beer</p>`;
    result.innerHTML += `<p>${Math.ceil(totalAmountBeverage / 1000)} Liters of Beverage</p>`;
}

function beefPPerson(time) {
    return time >= 6 ? 650 : 400;
}

function beerPPerson(time) {
    return time >= 6 ? 2000 : 1200;
}

function beveragePPerson(time) {
    return time >= 6 ? 1500 : 1000;
}