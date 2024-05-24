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
    answer.innerHTML = '1 Miles = 1.60934 Kilometers'
    input.setAttribute('placeholder', 'Distance in miles');
  }
  if (event.key === 'm') {
    choice = 'm';
    conversion.innerHTML = 'Kilometers to Miles';
    option.innerHTML = "press 'k' key to convert miles to kilometers";
    answer.innerHTML = '1 Kilometers = 0.621371 Miles';
    input.setAttribute('placeholder', 'Distance in kilometers');
  }
});
// When convert is clicked
convert.addEventListener('click', function () {
  if (choice === 'k') {
    //console.log(choice);
    //console.log(Number(input.value) * 1.60934);
    answer.innerHTML = `${Number(input.value)} miles = ${(Number(input.value) * 1.60934).toFixed(2)} kilometers`;
    input.value = "";
  }
  if (choice === 'm') {
    //convert.addEventListener('click', function () {
    //console.log(choice);
    //console.log(Number(input.value) * 0.621371);
    answer.innerHTML = `${Number(input.value)} kilometers = ${(Number(input.value) * 0.621371).toFixed(2)} miles`;
    input.value = "";
    //})
  }
})








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







