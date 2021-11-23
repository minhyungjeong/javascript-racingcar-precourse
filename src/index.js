import isValidCarNames from './isValidCarNames.js';
import elements from './elements.js';

export default function RacingCarGame() {
  elements.addElementId();

  const carNamesForm = document.getElementById('car-names-form');
  const carNamesInput = document.getElementById('car-names-input');
  const racingCountResult = document.getElementById('racing-count-title');
  const racingCountForm = document.getElementById('racing-count-form');
  const racingResult = document.getElementById('racing-result');

  racingCountResult.style.display = 'none';
  racingCountForm.style.display = 'none';
  racingResult.style.display = 'none';

  carNamesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidCarNames(carNamesInput.value, carNamesForm);
  });
}

new RacingCarGame();
