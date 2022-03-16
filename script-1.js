// Översätter bildnamn till bilnamn
const carImages = {
  "img-1.png": "Volvo",
  "img-2.png": "Tesla",
  "img-3.png": "Volkswagen",
  "img-4.png": "Panzerkampfwagen",
  "img-5.png": "Vespa TAP",
  "img-6.png": "KV-2",

};

// Taggarna output-text och output-container återfinns i HTML-filen
let outputContainer = document.getElementById("text-output-container");
let outputText = document.getElementById("output-text");

let carImage = document.getElementById("image-output-container");
let title = (document.title = "JavaScript FTW!");
let btn1 = document.getElementById("button-1");
let btn2 = document.getElementById("button-2");
let btn3 = document.getElementById("button-3");
let btn4 = document.getElementById("button-4");
let btn5 = document.getElementById("button-5");
let btn6 = document.getElementById("button-6");

// Man kan t ex ställa färgen på ett område
outputContainer.style.backgroundColor = "white";

// Informationstext i den vänstra rutan
let infoText = "Möjliga bilar:<br><br>";
let brandArray = ["Volvo", "Tesla", "Volkswagen", "Panzerkampfwagen", "Vespa TAP", "KV-2"];

for (let i = 0; i < brandArray.length; i++) {
  infoText += `Bil #${i + 1}: ${brandArray[i]}` + "<br>";
}

infoText += "<br>Klicka i rutan för att dra en slumpad bil!";

// Här sker själva textutmatningen
outputContainer.innerHTML = infoText;

// Knappraden
btn1.textContent = "Bil #1";
btn2.textContent = "Bil #2";
btn3.textContent = "Bil #3";
btn4.textContent = "Bil #4";
btn5.textContent = "Bil #5";
btn6.textContent = "Bil #6";

// Funktion som slumpar fram en ny bild
function newCar() {
  // Slumpar fram en bil (ett tal mellan 1 och 3)
  let randomNumber = Math.floor(Math.random() * brandArray.length);
  // Skapar bildnamnet
  let currentImage = `img-${randomNumber + 1}.png`;
  console.log(currentImage);
  outputContainer.innerHTML = infoText;
  // Visar bild och text
  carImage.innerHTML = `<img src="./images/${currentImage}" />`;
  carImage.innerHTML += `<p>${carImages[currentImage]}</p>`;
}
function car1(){
  let currentImage = 'img-1.png'
  console.log(currentImage);
  outputContainer.innerHTML = "En vanlig gammal Volvo, attraherar EPA-raggare inom 2 km avstånd.";
  carImage.innerHTML = `<img src="./images/${currentImage}" />`;
  carImage.innerHTML += `<p>${carImages[currentImage]}</p>`;


}


function car2(){
  let currentImage = 'img-2.png'
  console.log(currentImage);
  outputContainer.innerHTML = "Elon musks uppfinning, driven av batterier med kobolt från kongolesiska barngruvor.";
  carImage.innerHTML = `<img src="./images/${currentImage}" />`;
  carImage.innerHTML += `<p>${carImages[currentImage]}</p>`;
}


function car3(){
  let currentImage = 'img-3.png'
  console.log(currentImage);
  outputContainer.innerHTML = "En bra bil, med kontroversiell historia...";
  carImage.innerHTML = `<img src="./images/${currentImage}" />`;
  carImage.innerHTML += `<p>${carImages[currentImage]}</p>`;
}


function car4(){
  let currentImage = 'img-4.png'
  console.log(currentImage);
  outputContainer.innerHTML = "En vis pansarvagn, har sett fasor du inte kan föreställa dig.";
  carImage.innerHTML = `<img src="./images/${currentImage}" />`;
  carImage.innerHTML += `<p>${carImages[currentImage]}</p>`;
}
function car5(){
  let currentImage = 'img-5.png'
  console.log(currentImage);  
  outputContainer.innerHTML = "Kombination av alkohol samt franska ingenjörer, Är en moped med ett raketgevär monterat.";
  carImage.innerHTML = `<img src="./images/${currentImage}" />`;
  carImage.innerHTML += `<p>${carImages[currentImage]}</p>`;
}
function car6(){
  let currentImage = 'img-6.png'
  console.log(currentImage);
  outputContainer.innerHTML = "En Sovjetisk stridsvagn med en 152 mm kanon, fördelaktigt att ha den som vän.";
  carImage.innerHTML = `<img src="./images/${currentImage}" />`;
  carImage.innerHTML += `<p>${carImages[currentImage]}</p>`;
}
// Lägger till en EventListener till outputContainer
outputContainer.addEventListener("click", newCar);
btn1.addEventListener("click",car1);
btn2.addEventListener("click",car2);
btn3.addEventListener("click",car3);
btn4.addEventListener("click",car4);
btn5.addEventListener("click",car5);
btn6.addEventListener("click",car6);

