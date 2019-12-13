/* 1)реализовать метод, принимающий строку и возвращающий является ли она палиндромом
2)реализовать метод который принимает число натуральное(int >0)и выдает массив чисел Фибоначчи до заданного числа
fn(2) => [1,1]
fn(4) => [1,1,2,3] */

function isPalind(str: string): boolean {
  let reverse: Array<string> = str.split("");
  reverse.reverse();
  let reverceStr: string = reverse.join("");
  if (str === reverceStr) {
    return true;
  } else return false;
}

function getFibon(n: number): void {
  let fibonacci: Array<number> = [1, 1];
  let result: Array<number> = [];

  n = Math.floor(n);
  for (let i = 0; fibonacci[i] < n; i++) {
    
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    ); 
  }

  fibonacci.splice(-2, 2);
  result = fibonacci; 
  return console.log(result);
}


