export default function RacingCarGame() {
  document.querySelectorAll('form')[0].id = 'car-names-form';
  document.querySelectorAll('input')[0].id = 'car-names-input';
  document.querySelectorAll('button')[0].id = 'car-names-submit';
  document.querySelectorAll('h4')[0].id = 'racing-count-title';
  document.querySelectorAll('form')[1].id = 'racing-count-form';
  document.querySelectorAll('input')[1].id = 'racing-count-input';
  document.querySelectorAll('button')[1].id = 'racing-count-submit';
  document.querySelectorAll('h4')[1].id = 'racing-result';

  const carNamesFrom = document.getElementById('car-names-form');
  const carNamesInput = document.getElementById('car-names-input');
  const racingCountResult = document.getElementById('racing-count-title');
  const racingCountForm = document.getElementById('racing-count-form');
  const racingResult = document.getElementById('racing-result');

  racingCountResult.style.display = 'none';
  racingCountForm.style.display = 'none';
  racingResult.style.display = 'none';

  carNamesFrom.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(carNamesInput.value);
  });
}

new RacingCarGame();
