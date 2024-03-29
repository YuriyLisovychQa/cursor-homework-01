const SALMON_PRICE = 15.678;
const BREAD_PRICE = 123.965;
const TOMATO_PRICE = 90.2345;
const moneyCustomer = 500;
const maxProductPrice = Math.max(SALMON_PRICE, BREAD_PRICE, TOMATO_PRICE);
console.log("Maximal product price = " + maxProductPrice);

const minProductPrice = Math.min(SALMON_PRICE, BREAD_PRICE, TOMATO_PRICE);
console.log("Minimal product price = " + minProductPrice);

const sumProducts = SALMON_PRICE + BREAD_PRICE + TOMATO_PRICE;
console.log("Products sum = " + sumProducts);

const sumFloor = Math.floor(sumProducts);
console.log(sumFloor);

const sumRound = Math.round((sumProducts) / 100) * 100;
console.log(sumRound);

const isNumberEven = sumFloor % 2 === 0;
console.log(isNumberEven ? 'Number is odd' : 'Number is even');


const rest = +((moneyCustomer - sumProducts).toFixed(2));
console.log("Rest = " + rest);


const averageProductsValue = +((SALMON_PRICE + BREAD_PRICE + TOMATO_PRICE) / 3).toFixed(2);
console.log("Average products value = " + averageProductsValue);

const discount = +(Math.random().toFixed(2) * 100);
console.log("Discount = " + discount + " %");

const incomeProfit = +((sumProducts / 2) - discount).toFixed(2);
console.log("Price with discount = " + incomeProfit);

//Advanced

const table = document.getElementById("table-result");

const firstRow = table.insertRow(0);

const names = ["Salmon price", "Bread price", "Tomato price",
              "Max price", "Min price", "Sum products",
              "Sum floor", "Sum round", "Boolean", "Rest",
              "Average products value", "Discount", "Profit income"
];

names.forEach(element => firstRow.insertCell(names.indexOf(element)).innerHTML = element);

const secondRow = table.insertRow(1);

const digits = [SALMON_PRICE, BREAD_PRICE, TOMATO_PRICE,
  maxProductPrice, minProductPrice, sumProducts, sumFloor, sumRound,
    isNumberEven, rest, averageProductsValue, discount, incomeProfit
];

digits.forEach(element => secondRow.insertCell(digits.indexOf(element)).innerHTML = element);

