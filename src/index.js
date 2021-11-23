import isValidCarNames from './isValidCarNames.js';
import elements from './elements.js';

export default function RacingCarGame() {
  elements.addElementId();

  // console.log(elements.carNamesForm); //이렇게 하면 Null 뜸,,

  const carNamesForm = document.getElementById('car-names-form');
  const carNamesInput = document.getElementById('car-names-input');
  const racingCountTitle = document.getElementById('racing-count-title');
  const racingCountForm = document.getElementById('racing-count-form');
  const racingCountInput = document.getElementById('racing-count-input');
  const racingResult = document.getElementById('racing-result');

  racingCountTitle.style.display = 'none';
  racingCountForm.style.display = 'none';
  racingResult.style.display = 'none';

  let cars = [];
  carNamesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    cars = isValidCarNames(carNamesInput.value, carNamesForm);
    if (cars) {
      racingCountTitle.style.display = '';
      racingCountForm.style.display = '';
    }
  });

  let numberOfPlay = 0;
  racingCountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    numberOfPlay = isValidNumberOfPlay(racingCountInput.value, racingCountForm);
  });
}

new RacingCarGame();
