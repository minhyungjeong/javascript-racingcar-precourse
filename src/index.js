import isValidCarNames from './isValidCarNames.js';
import elements from './elements.js';

export default function RacingCarGame() {
  elements.addElementId();

  // console.log(elements.carNamesForm); //이렇게 하면 Null 뜸,,

  const carNamesForm = document.getElementById('car-names-form');
  const carNamesInput = document.getElementById('car-names-input');
  const carNamesSubmit = document.getElementById('car-names-submit');
  const racingCountTitle = document.getElementById('racing-count-title');
  const racingCountForm = document.getElementById('racing-count-form');
  const racingCountSubmit = document.getElementById('racing-count-submit');
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
      carNamesInput.disabled = true;
      carNamesSubmit.disabled = true;
    }
  });

  racingCountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    playGame(racingCountInput.value);
    racingResult.style.display = '';
    racingCountInput.disabled = true;
    racingCountSubmit.disabled = true;
  });

  const playGame = (numberOfPlay) => {
    for (let i = 0; i < numberOfPlay; i++) {
      cars.forEach((car) => {
        car.tryGoForward();
        racingResult.insertAdjacentHTML(
          'afterend',
          `<div>${car.name}: ${car.hypenOfdrivingDistance}<div>`
        );
      });
      racingResult.insertAdjacentHTML('afterend', `<br>`);
    }
  };
}

new RacingCarGame();
