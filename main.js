// 1. debounce
// - reference - https://github.com/lodash/lodash/blob/main/dist/lodash.js#L10372
// - debounce 함수 내부의 timerId는 debounce가 호출될 때 생성된 반환 함수의 렉시컬 스코프에 포함됨
// - 반환된 함수는 timerId에 접근할 수 있는 상태로 유지되므로, 호출이 반복될 때마다 동일한 timerId 변수를 참조할 수 있음

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
const throttle = (func, interval) => {
  let lastTime = 0;
  
  return (...args) => {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      func(...args);
    }
  };
};