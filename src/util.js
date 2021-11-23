import {
  INCLUDING_SPACE,
  REQUIRE_ATOZ_AND_COMMA,
  REQUIRE_UNDER_FIVE_LETTER,
  CAR_NAMES_DUPLICATED,
} from './constants.js';

const util = {
  checkAToZAndComma: (string, form) => {
    if (!/^[a-z]|^[\,]/.test(string)) {
      alert(REQUIRE_ATOZ_AND_COMMA);
      form.reset();
      return false;
    }
    return true;
  },
  checkDuplicate: (array, form) => {
    const duplicateCheck = new Set(array);

    if (array.length !== duplicateCheck.size) {
      alert(CAR_NAMES_DUPLICATED);
      form.reset();
      return false;
    }
    return true;
  },
  checkSpace: (name, form) => {
    if (/\s/g.test(name) || name === '') {
      alert(INCLUDING_SPACE);
      form.reset();
      return false;
    }
    return true;
  },
  checkUnderFiveLetter: (name, form) => {
    if (name.length > 5) {
      alert(REQUIRE_UNDER_FIVE_LETTER);
      form.reset();
      return false;
    }
    return true;
  },
};

export default util;
