import { CAR_NAMES_SEPERATOR } from './constants.js';

import Car from './Car.js';
import util from './util.js';

const isValidCarNames = (string, form) => {
  if (!util.checkAToZAndComma(string, form)) return;

  const carNamesArr = string.split(CAR_NAMES_SEPERATOR);
  if (!util.checkDuplicate(carNamesArr, form)) return;

  let cars = [];
  carNamesArr.forEach((name) => {
    if (!util.checkSpace(name, form)) return;
    if (!util.checkUnderFiveLetter(name, form)) return;
    cars.push(new Car(name));
  });

  return cars;
};

export default isValidCarNames;
