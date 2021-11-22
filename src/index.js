export default function RacingCarGame() {
  const addIdTag = () => {
    const carNamesInput = (document.querySelectorAll('input')[0].id =
      'car-names-input');
    const carNamesSubmit = (document.querySelectorAll('button')[0].id =
      'car-names-submit');
    const racingCountInput = (document.querySelectorAll('input')[1].id =
      'racing-count-input');
    const racingCountSubmit = (document.querySelectorAll('button')[1].id =
      'racing-count-submit');
  };

  addIdTag();
}

new RacingCarGame();
