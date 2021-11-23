import { CAR_NAMES_SEPERATOR } from './constants.js';

import Car from './Car.js';
import util from './util.js';

const isValidCarNames = (string, form) => {
  if (util.checkAToZAndComma(string, form)) return;

  const carNamesArr = string.split(CAR_NAMES_SEPERATOR);
  if (util.checkDuplicate(carNamesArr, form)) return;

  if (util.checkSpace(string, form)) return;

  let cars = [];
  carNamesArr.forEach((name) => {
    if (util.checkUnderFiveLetter(name, form)) return;
    cars.push(new Car(name));
  });

  return cars.length > 0 ? cars : false;
};

export default isValidCarNames;
