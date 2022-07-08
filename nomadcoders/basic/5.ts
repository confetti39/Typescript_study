// function add(a: number, b:number) {
//     return a + b
// }

//call signitures
// type Add = (a: number, b: number) => number;
// Call(=function) Signiture란 함수의 매개변수와 반환 값의 타입을 모두 type으로 미리 선언하는 것이다.
// React에서 함수로 props를 보낼 때, 어떻게 작동할지 미리 설계 가능함.
// 먼저 함수의 타입을 설정하고 코드를 구현할 수 있어서 장점임.

type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};
const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path);
  }
};
