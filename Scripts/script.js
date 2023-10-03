// Variables
const convert = document.querySelector('#convert'); // Get convert button
const distance = document.querySelector('#input'); // Get input
const answer = document.querySelector('#answer'); // Get answer paragraph
const conversion = document.querySelector('#conversion');
const option = document.querySelector('#option');
const input = document.querySelector('#input');
let choice = 'm';


window.addEventListener("keypress", function (event) {
  if (event.key === 'k') {
    choice = 'k';
    conversion.innerHTML = 'Miles to Kilometers';
    option.innerHTML = "press 'm' key to convert kilometers to miles";
    answer.innerHTML = '1 Miles = 1.6 Kilometers'
    input.setAttribute('placeholder', 'Distance in miles');
  } else {
    choice = 'm';
    conversion.innerHTML = 'Kilometers to Miles';
    option.innerHTML = "press 'k' key to convert miles to kilometers";
    answer.innerHTML = '1 Kilometers = 0.62 Miles';
    input.setAttribute('placeholder', 'Distance in kilometers');
  }
});
// When convert is clicked
if (choice === 'k') {
  convert.addEventListener('click', function () {
    console.log(choice);
  })
} else {
  convert.addEventListener('click', function () {
    console.log(choice);
  })
}









// convert.addEventListener('click', function () {
//   if (choice === 'm') {
//     console.log(choice);
//     answer.innerHTML = `${distance.value} Kilometers = ${(distance.value * .621371).toFixed(2)} Miles`;
//     distance.value = '';
//   } else if (choice === 'k') {
//     console.log(choice);
//     answer.innerHTML = `${distance.value} Miles = ${(distance.value * 1.60934).toFixed(2)} Kilometers`;
//   } else {
//     answer.innerHTML = 'Select a distance';
//   }
// });







