export const isValidCarNames = (string) => {
  //a-z으로 이루어진 영어가 포함되어 있거나 ,가 포함되어있는 경우
  if (/\s/g.test(string)) {
    alert('공백이 포함되어 있습니다.');
  } else if (!/^[a-z]|^[\,]/.test(string)) {
    alert('a-z(영어 소문자)로 이루어진 이름과 콤마로 구분하여 입력해주세요!');
  }
};
