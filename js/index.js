function updateTime(){

//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
if(losAngelesElement){
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");


losAngelesDateElement.innerHtml = moment().format("MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = moment().format("h:mm:ss [<small>]A[</small>]");
}

//Cancun
let cancunElement = document.querySelector("#cancun");
if(cancunElement){
let cancunDateElement = cancunElement.querySelector(".date");
let cancunTimeElement = cancunElement.querySelector(".time");


cancunDateElement.innerHtml = moment().tz("America/Cancun").format("MMMM Do, YYYY");
cancunTimeElement.innerHTML = moment().tz("America/Cancun").format("h:mm:ss [<small>]A[</small>]");
}

};

updateTime();
setInterval(updateTime, 1000);

function updateCity(event){
    let timeZone = event.target.value;
    if (timeZone === "current"){
        timeZone = moment.tz.guess();
    }
    let name = timeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(timeZone);
    let citiesId = document.querySelector("#cities");
    citiesId.innerHTML = `<div class="city">
    <div>
    <h2>${name}</h2>
    <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
 </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
 </div>
 <a href="/">Back to cities list</a>`;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);