// # Funtional Programming

// ## 1. map
// - 구현 포인트는 빈배열 만들어서 하나씩 밀어넣는 것
const map = (fn, iter) => {
  const arr = [];
  iter.forEach((item) => arr.push(fn(item)));
  return arr;
};

const aa = map((a) => a * 2, [1, 2, 3, 4, 5]);
console.log(aa);

// ## 2. filter
const filter = (fn, iter) => {
  const arr = [];
  iter.forEach((item) => {
    if (fn(item)) arr.push(item);
  });
  return arr;
};

const bb = filter((a) => a > 3, [1, 2, 3, 4, 5]);
console.log(bb);

// ## 3. reduce
const reduce = (fn, initValue, iter) => {
  let acc = initValue;
  iter.forEach((item) => {
    acc = fn(acc, item);
  })
  return acc;
}

const add = (a, b) => a + b;

console.log(reduce(add, 0, [1, 2, 3, 4, 5]));

// ## 4. currying

// ## 5. lazy evaluation
