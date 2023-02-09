function updateTime(){

//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");


losAngelesDateElement.innerHtml = moment().format("MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = moment().format("h:mm:ss [<small>]A[</small>]");


//Cancun
let cancunElement = document.querySelector("#cancun");
let cancunDateElement = cancunElement.querySelector(".date");
let cancunTimeElement = cancunElement.querySelector(".time");


cancunDateElement.innerHtml = moment().tz("America/Cancun").format("MMMM Do, YYYY");
cancunTimeElement.innerHTML = moment().tz("America/Cancun").format("h:mm:ss [<small>]A[</small>]");

};
updateTime();
setInterval(updateTime, 1000);
