// 1. debounce
// https://github.com/lodash/lodash/blob/8a26eb42adb303f4adc7ef56e300f14c5992aa68/dist/lodash.js#L10372
// - debounce 함수 내부의 timerId는 debounce가 호출될 때 생성된 반환 함수의 렉시컬 스코프에 포함됨
// - 반환된 함수는 timerId에 접근할 수 있는 상태로 유지되므로, 호출이 반복될 때마다 동일한 timerId 변수를 참조할 수 있음

// 구현 팁 - timerId를 클로저에 저장했다가 clearTimeout하고 setTimeout으로 실행하는게 포인트
const debounce = (func, delay) => {
  let timerId; // 타이머 ID를 저장할 변수

  return (...args) => { // 여기서 ...args 리턴된 함수가 실행될 때 전달되는 인자를 말함
    clearTimeout(timerId); // 이전에 설정된 타이머를 초기화
    timerId = setTimeout(() => func(...args), delay); // 새로운 타이머를 설정
  };
};
const test = (a, b) => a + b;
debounce(test, 1000);



// 2. throttle
// https://github.com/lodash/lodash/blob/8a26eb42adb303f4adc7ef56e300f14c5992aa68/dist/lodash.js#L10965

// 구현 팁 - isWaiting과 setTimeout 후에 isWaiting 상태 바꾸기
const throttle = (callback, wait) => {
  let isWaiting = false;
  return (...args) => {
    if (!isWaiting) {
      callback(...args);
      isWaiting = true;
      setTimeout(() => (isWaiting = false), wait);
    }
  };
};