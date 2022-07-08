// polymorphism (다형성)
type SuperPrint = {
  <T>(arr: T[]): T; // 제네릭을 쓰는 방법 (제네릭은 타입을 유추하는 역할을 함)
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true, true]);
const c = superPrint(["a", "b", "c"]);
const d = superPrint([1, 2, true, false, "string"]);
