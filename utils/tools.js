export function shuffle(input) {
  const length = input.length;
  let index;

  // 执行length-1次即可，i=0时替换的是自身，这么做没有意义
  for (let i = length - 1; i; i--) {
    // 选取0到i-1中的一个位置
    index = Math.floor(Math.random() * i);
    // 与i位置的值互换
    input[i] = input.splice(index, 1, input[i])[0];
  }
  return input
}

