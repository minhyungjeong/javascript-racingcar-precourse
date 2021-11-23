import {
  INCLUDING_SPACE,
  REQUIRE_ATOZ_AND_COMMA,
  CAR_NAMES_SEPERATOR,
  REQUIRE_UNDER_FIVE_LETTER,
  CAR_NAMES_DUPLICATED,
} from './constants.js';

const isValidCarNames = (string, form) => {
  if (!/^[a-z]|^[\,]/.test(string)) {
    alert(REQUIRE_ATOZ_AND_COMMA);
    form.reset();
  }
  const carNamesArr = string.split(CAR_NAMES_SEPERATOR);
  const duplicateCheck = new Set(carNamesArr);

  if (carNamesArr.length !== duplicateCheck.size) {
    alert(CAR_NAMES_DUPLICATED);
    form.reset();
  }

  carNamesArr.forEach((str) => {
    if (/\s/g.test(str) || str === '') {
      alert(INCLUDING_SPACE);
      form.reset();
      return;
    }
    if (str.length > 5) {
      alert(REQUIRE_UNDER_FIVE_LETTER);
      form.reset();
      return;
    }
  });
};

export default isValidCarNames;
