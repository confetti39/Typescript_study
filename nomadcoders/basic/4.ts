let _a: unknown;
// unknown타입은 모든 값을 나타냅니다.
// 이것은 any타입과 비슷하지만 any보다 unknown이 더 안전합니다.
// 이유는 unknown값으로 작업을 수행하는 것은 합법적이지 않기 때문입니다.

if (typeof _a === "number") {
  let _b = _a + 1;
}
if (typeof _a === "string") {
  let _b = _a.toUpperCase();
}

function hello() {
  // :void 생략 가능함.
  console.log("hello");
}
// void는 값을 반환하지 않는 함수의 반환 값을 나타냅니다.
// 함수에 return 문이 없거나 해당 return 문에서 명시적 값을 반환하지 않을 때 항상 유추되는 타입입니다.

// const func = hello();
// func.toUpperCase(); => Error: 'void' 형식에 'toUpperCase' 속성이 없습니다.

function helloParameter(name: string | number) {
  if (typeof name === "string") {
    name; // name의 type은 string임.
  } else if (typeof name === "number") {
    name; // name의 type은 number임.
  } else {
    name; // name의 type은 never임.
  }
}
