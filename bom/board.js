//css선택자 아무거나 가능
let container = document.querySelector(".container");
console.log(container);

let firstLi = document.querySelector(".pagination li:first-child");
console.log(firstLi);

let secondLi = document.querySelector(".pagination li:nth-child(2)");
console.log(secondLi);

let button = document.querySelector('[data-target="#navbarText"]');
console.log(button);

let liList = document.querySelectorAll(".pagination li");
console.log(liList);
