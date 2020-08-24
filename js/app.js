'use strict';
// Global Variables
var parentElement = document.getElementById('products');
var finalList = document.getElementById('ul');
var productArray = [];
var totalClicks = 0;
var maxClicks = 25;
var uniqueImageArray = [];

// Constructor for Products: source, name, shown, clicks
function Product (source, name, shown=0, clicks=0){
  this.title = name;
  this.alt = name;
  this.filepath = source;
  this.clicks = clicks;
  this.shown = shown;
  productArray.push(this);
}
// New Product array
var getItemArray = localStorage.getItem('items');
if (getItemArray === null){
  new Product('../img/bag.jpg', 'Bag');
  new Product('../img/banana.jpg', 'Banana');
  new Product('../img/bathroom.jpg', 'Bathroom');
  new Product('../img/boots.jpg', 'Boots');
  new Product('../img/breakfast.jpg', 'Breakfast');
  new Product('../img/bubblegum.jpg', 'Bubblegum');
  new Product('../img/chair.jpg', 'Chair');
  new Product('../img/cthulhu.jpg', 'Cthulhu');
  new Product('../img/dog-duck.jpg', 'Dog Duck');
  new Product('../img/dragon.jpg', 'Dragon');
  new Product('../img/pen.jpg', 'Pen');
  new Product('../img/pet-sweep.jpg', 'Pet Sweep');
  new Product('../img/scissors.jpg', 'Scissors');
  new Product('../img/shark.jpg', 'Shark');
  new Product('../img/sweep.png', 'Sweep');
  new Product('../img/tauntaun.jpg', 'Tauntaun');
  new Product('../img/unicorn.jpg', 'Unicorn');
  new Product('../img/usb.gif', 'USB');
  new Product('../img/water-can.jpg', 'Water Can');
  new Product('../img/wine-glass.jpg', 'Wine Glass');

  // Parse item array into JSON
  // Clear out all old items
  // Console log parse/convert items
} else {
  var parseItems = JSON.parse(getItemArray);
  for (var i = 0; i < parseItems.length; i++){
    var oldItem = parseItems[i];
    new Product(oldItem.filepath, oldItem.title, oldItem.shown, oldItem.clicks);
  }
  console.log (parseItems);
}



function getRandomImage(){


  var randomIndex = getRandomNumber(productArray.length);

  // [1, 2, 4, 8, 9, 19]
  while(uniqueImageArray.includes(randomIndex)){
    randomIndex = getRandomNumber(productArray.length);
  }
  // add the index to the end of the array
  uniqueImageArray.push(randomIndex);
  // remove the oldest index from the array - that would be the first index
  if(uniqueImageArray.length > 6){
    uniqueImageArray.shift();
  }

  var chosenImage = productArray[randomIndex];
  chosenImage.shown++;

  buildElements(chosenImage);

}
function buildElements(chosenImage){
  //building the image
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', chosenImage.filepath);
  imageElement.width = 400;
  imageElement.style.padding = '10px';
  // padding code from w3schools" http://webdevable.com/w3schools/jsref/prop_style_padding.html
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('title', chosenImage.title);

  // create an input
  // needs to have a type ="radio"
  // needs to have a value="alt"
  var radioButton = document.createElement('input');
  radioButton.setAttribute('type', 'radio');
  radioButton.setAttribute('value', chosenImage.alt);

  //<input type="radio" value=chosenImage.alt/>
  // add radio button
  // add child - image element
  parentElement.appendChild(radioButton);
  parentElement.appendChild(imageElement);
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// var radioButton = document.createElement ('input');
// radioButton.setAttribute('type', 'radio');
// radioButton.setAttribute('value', 'chosenImage.alt');
// parentElement.appendChild(radioButton);
// parentElement.appendChild(imageElement);

function handleClick(event){
  totalClicks++;
  console.log('The total clicks were: '+ totalClicks);
  console.log('the event.target', event.target.alt);
  var alt = event.target.alt;

  for(var i=0; i<productArray.length; i++){
    if(alt === productArray[i].alt){

      productArray[i].clicks++;
      productArray[i].shown++;
      console.log(productArray[i]);
    }
  }
  // give parent element new content - 3 random images
  parentElement.innerHTML = '';
  getRandomImage();
  getRandomImage();
  getRandomImage();

  var jsonItemArray = JSON.stringify(productArray);
  localStorage.setItem('items', jsonItemArray);
  // If total clicks is greater than max clicks, then remove event listener.
  if (totalClicks >= maxClicks) {

    parentElement.removeEventListener('click', handleClick);
    for (var j = 0; j < productArray.length; j++){
      var li = document.createElement('li');
      li.textContent = productArray[j].title + ' had ' + productArray[j].clicks + ' votes and was shown ' + productArray[j].shown + ' times.';
      finalList.appendChild(li);
    }
  }
}
// display 3 random images on the page after click
parentElement.addEventListener('click', handleClick);
getRandomImage();
getRandomImage();
getRandomImage();

// graph display of clicks
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog Duck', 'Dragon', 'Pen', 'Pet Sweep', 'Scissors', 'Shark', 'Sweep', 'Tauntaun', 'Unicorn', 'USB', 'Water Can', 'Wine Glass'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
