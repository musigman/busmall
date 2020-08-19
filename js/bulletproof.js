// 'use strict';


// // Global Variables
// var parentElement = document.getElementById('products');
// var finalList = document.getElementById('ul');
// var productArray = [];
// var totalClicks = 0;
// var maxClicks = 25;

// function Product (name){
//   this.title = `${name}`.slice(0,-4);
//   // slice function from StackOverflow: https://stackoverflow.com/questions/952924/javascript-chop-slice-trim-off-last-character-in-string
//   this.title = this.title.charAt(0).toUpperCase() + this.title.slice(1);
//   // capitaliation code from: https://paulund.co.uk/how-to-capitalize-the-first-letter-of-a-string-in-javascript
//   this.alt = `${name}`;
//   this.filepath = `../img/${name}`;
//   this.clicks = 0;
//   this.shown = 0;
//   productArray.push(this);
// }

// new Product('bag.jpg');
// new Product('banana.jpg');
// new Product('bathroom.jpg');
// new Product('boots.jpg');
// new Product('breakfast.jpg');
// new Product('bubblegum.jpg');
// new Product('chair.jpg');
// new Product('cthulhu.jpg');
// new Product('dog-duck.jpg');
// new Product('dragon.jpg');
// new Product('pen.jpg');
// new Product('pet-sweep.jpg');
// new Product('scissors.jpg');
// new Product('shark.jpg');
// new Product('sweep.png');
// new Product('tauntaun.jpg');
// new Product('unicorn.jpg');
// new Product('usb.gif');
// new Product('water-can.jpg');
// new Product('wine-glass.jpg');


// function getRandomImage(){
//   var randomIndex = getRandomNumber(productArray.length);
//   var chosenImage = productArray[randomIndex];
//   chosenImage.shown++;
//   var imageElement = document.createElement('img');
//   imageElement.setAttribute('src', chosenImage.filepath);
//   imageElement.width = 400;
//   imageElement.style.padding = '10px';
//   // padding code from w3schools" http://webdevable.com/w3schools/jsref/prop_style_padding.html
//   imageElement.setAttribute('alt', chosenImage.alt);
//   imageElement.setAttribute('title', chosenImage.title);
//   parentElement.appendChild(imageElement);
// }

// function getRandomNumber(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// function handleClick(event){
//   parentElement.onclick= totalClicks++;
//   console.log('The total clicks were: '+ totalClicks);
//   var alt = event.target.alt;

//   for(var i=0; i<productArray.length; i++){
//     if(alt === productArray[i].alt){
//       productArray[i].clicks++;
//       productArray[i].shown++;
//     }
//   }

//   parentElement.innerHTML = '';
//   getRandomImage();
//   getRandomImage();
//   getRandomImage();
//   if (totalClicks>=maxClicks) {
//     parentElement.removeEventListener('click', handleClick);
//     for (var j = 0; j < productArray.length; j++){
//       var li = document.createElement('li');
//       li.textContent = productArray[j].title + ' had ' + productArray[j].clicks + ' votes and was shown ' + productArray[j].shown + ' times.';
//       finalList.appendChild(li);
//     }
//   }
// }


// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true
//         }
//       }]
//     }
//   }
// });

// parentElement.addEventListener('click', handleClick);
// getRandomImage();
// getRandomImage();
// getRandomImage();


'use strict';
var dogArray = [];

function Dog(name, breed, hair, age, energy){
  this.name =name;
  this.breed = breed;
  this.hair = hair;
  this.age = age;
  this.energy = energy;

  dogArray.push(this);
}
new Dog('Paisley', 'Sheltie', 'Black', 4, 'Mellow');
new Dog('Paisley', 'Sheltie', 'Black', 4, 'Mellow');
new Dog('Paisley', 'Sheltie', 'Black', 4, 'Mellow');
new Dog('Paisley', 'Sheltie', 'Black', 4, 'Mellow');


var stringDogs = JSON.stringify(dogArray);
console.log('this is my JSON dogArray:', stringDogs);
// Step 2: Put my JSON dogArray into Local Storage
// local starage take towo values: a key -which can be anything - and a value - which is the JSON
localStorage.setItem('dogs', stringDogs);

  // step 3: Get my odgs out of local storage
  // getItems jus takes the key

var whoLetTheDogsOut = localStorage.getItem('dogs');
//console.log('this is what I got back from Local'); Storage:', whoLetTheDogsOut);
// Step 4: Parse the dog array that I got back

var parseDogs = JSON.parse(whoLetTheDogsOut);
console.log('my parsed dogs:' , parsedDogs);


