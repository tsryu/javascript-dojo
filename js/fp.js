// # Funtional Programming

const log = console.log

// ## 1. map
// - 구현 포인트는 빈배열 만들어서 하나씩 밀어넣는 것
const map = (fn, iter) => {
  const arr = [];
  for (const a of iter) {
    (a) => arr.push(fn(a))
  }
  return arr;
};

const aa = map((a) => a * 2, [1, 2, 3, 4, 5]);
log(aa);

// ## 2. filter
const filter = (fn, iter) => {
  const arr = [];
  for (const a of iter) {
    if (fn(a)) arr.push(a);
  };
  return arr;
};

const bb = filter((a) => a > 3, [1, 2, 3, 4, 5]);
log(bb);

// ## 3. reduce
// - 구현 포인트는 fn이 인자 2개라는 점, 기본값을 넘긴다는 부분임
// - iter가 없다면 acc를 받아서 처리하는 방식
const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};
const add = (a, b) => a + b;

log(reduce(add, 0, [1, 2, 3, 4, 5]));

// ## 4. go
// - 함수를 순서대로 적용해주는 함수
const go = (...args) => reduce((a, f) => f(a), args);

log(
  go(
    add(0, 1),
    (a) => a + 10,
    (a) => a + 100
  )
);

// ## 5. pipe
// - go로 구성한 함수를 리턴하는 함수. 리턴한 함수를 사용해 시작부터 인자를 넘길 수 있다
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);
const pipedF = pipe(
  (a, b) => a + b,
  a => a + 10,
  a => a + 100);

// pipe는 f로 정의해서 인자를 이렇게 넘길 수 있다
log(pipedF(0, 1)); // 111
// ## 6. curry

// ## 7. lazy evaluation + iterator

// ## 8. Promise