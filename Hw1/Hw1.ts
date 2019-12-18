/* 1)реализовать метод, принимающий строку и возвращающий является ли она палиндромом
2)реализовать метод который принимает число натуральное(int >0)и выдает массив чисел Фибоначчи до заданного числа
fn(2) => [1,1]
fn(4) => [1,1,2,3] */

function isPalind(str: string): boolean {
  let reverse: string = str
    .split("").reverse().join("");
  if (str === reverse) {
    return true;
  } else return false;
}

function getFibon(n: number): Array<number> | void {
  n = Math.floor(n);
  let res: Array<number> = [1, 1];
  if (n <= 1) {
    return alert("слишком маленькое число для построения массива Фибоначчи");
  } else if (n >= 3) {
    for (;;) {
      if (res[res.length - 1] + res[res.length - 2] < n) {
        res.push(res[res.length - 1] + res[res.length - 2]);
      } else break;
    }
  }
  return res;
}
