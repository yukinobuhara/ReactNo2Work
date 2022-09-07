//変数　let 再代入可能　再宣言不可
let a = "Raise";
a = "Tech";

console.log(a); //"Tech"

// let a = "再宣言不可";

//変数　const 再代入・再宣言不可

// const b = "Raise";
// b = "Tech";

// console.log(b);

//関数の宣言

const getTriangle = function (height, base) {
  return (height * base) / 2;
};

console.log(getTriangle(10, 10)); //50

const getSquare = (height, base) => {
  return height * base;
};

console.log(getSquare(10, 10)); //100

//四則演算
console.log(1 + 2); //3
console.log(5 - 2); //3
console.log(2 * 2); //4
console.log(5 % 2); //1
console.log(4 / 2); //2

//比較演算
const c = "1";
const d = 1;
console.log(c == d); //true
console.log(c === d); //false

console.log(c != d); //false
console.log(c !== d); //true

//論理演算
const e = "1";
const f = 1;

e == f && console.log("True"); // "True" (&&の左はtrue)
e === f || console.log("True"); //"True" (||の左はfalse)

const True = true;
const False = false;

console.log(!True); //false

console.log(True ? "true" : "false"); //"true"

//switch構文

const str = "b";

switch (str) {
  case "a":
    console.log("a");
    break;
  case "b":
    console.log("b");
    break;
  default:
    console.log("その他");
    break;
}

//テンプレート文字列
const month = "9";
const course = "React";
console.log(`私は${month}月度の${course}コースを受講しています`);
