const convert = document.querySelector('#convert'); // Get convert button
const distance = document.querySelector('#input'); // Get input
const answer = document.querySelector('#answer'); // Get answer paragraph





// When convert is clicked
convert.addEventListener('click', function () {
  answer.innerHTML = `${distance.value} kilometers = ${(distance.value * .621371).toFixed(2)} Miles`;
  distance.value = '';
});








