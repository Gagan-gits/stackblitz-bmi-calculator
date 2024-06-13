const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const heightData = parseInt(document.querySelector('#height').value);
  const weightData = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (heightData === '' || heightData < 0 || isNaN(heightData)) {
    result.innerHTML = 'Please give valide details';
  } else if (weightData === '' || weightData < 0 || isNaN(weightData)) {
    result.innerHTML = 'Please give valide details';
  } else {
    const bmi = (weightData / ((heightData * heightData) / 10000)).toFixed(2);

    if (bmi < 18.6 || bmi > 24.9) {
      result.style.color = 'red';
      result.innerHTML = `<span>${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.style.color = 'green';
      result.innerHTML = `<span>${bmi}</span>`;
    } else {
      result.innerHTML = `<span>${bmi}</span>`;
    }
  }
});
