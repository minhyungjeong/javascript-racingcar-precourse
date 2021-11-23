import {
  INCLUDING_SPACE,
  REQUIRE_ATOZ_AND_COMMA,
  CAR_NAMES_SEPERATOR,
  REQUIRE_UNDER_FIVE_LETTER,
  CAR_NAMES_DUPLICATED,
} from './constants.js';

import Car from './Car.js';

const isValidCarNames = (names, form) => {
  if (!/^[a-z]|^[\,]/.test(names)) {
    alert(REQUIRE_ATOZ_AND_COMMA);
    form.reset();
  }
  const carNamesArr = names.split(CAR_NAMES_SEPERATOR);
  const duplicateCheck = new Set(carNamesArr);

  if (carNamesArr.length !== duplicateCheck.size) {
    alert(CAR_NAMES_DUPLICATED);
    form.reset();
  }

  let cars = [];
  carNamesArr.forEach((name) => {
    if (/\s/g.test(name) || name === '') {
      alert(INCLUDING_SPACE);
      form.reset();
      return;
    }
    if (name.length > 5) {
      alert(REQUIRE_UNDER_FIVE_LETTER);
      form.reset();
      return;
    }
    cars.push(new Car(name));
  });

  cars.forEach((obj) => console.log(obj.drivingDistance));
};

export default isValidCarNames;
