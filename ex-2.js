// Start coding here
// Exercise #2 : Declaring the Function Expressions

// ให้ Refactor โค้ดในส่วนของฟังก์ชันที่เขียนจาก Exercise #1****
// ให้ฟังก์ชันอยู่ในรูปแบบของ Function Expression**** expression function ประกาศไว้เก็๋บตัวแปร

const add = function(a, b) {
    return a + b;
  };
  
  const subtract = function(a, b) {
    return a - b;
  };
  
  const multiply = function(a, b) {
    return a * b;
  };
  
  const divide = function(a, b) {
    return a / b;
  };
  
  console.log(add(10, 5));
  console.log(subtract(10, 5));
  console.log(multiply(10, 5));
  console.log(divide(10, 5));