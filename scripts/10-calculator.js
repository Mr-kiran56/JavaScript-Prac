let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  document.querySelector('.js-button').innerHTML=calculation;
  localStorage.setItem('calculation', calculation);
}
function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}
