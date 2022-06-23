const player: readonly [string, number, boolean] = ["nico", 12, false];
// Tuple, 항상 정해진 개수의 요소를 가져야하는 array를 지정할 수 있음.

let a = [];
// any는 타입스크립트의 보호 장치들로부터 빠져나오고 싶을 때 쓰는 타입 (타입 생략하면 자동으로 any)
// 따라서 any는 아주 신중하게 사용해야 함.
const arr: any[] = [1, 2, 3, 4];
const b: any = true;
a + b; // any를 자주 사용하지 않는 것이 좋음.
