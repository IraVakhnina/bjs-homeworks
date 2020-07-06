'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {

  checkIsNaN(percent, contribution, amount, date);
  let nowDate = new Date();
  let numberMonth = countMonth(nowDate, date);
  let sumCredit = amount - contribution;
  let p = percent / 100 / 12;

  let payPerMonth = sumCredit * (p + p / (Math.pow(1 + p, numberMonth) - 1));

  let totalAmount = +(numberMonth * payPerMonth).toFixed(2);
  console.log(totalAmount);

  function countMonth(startDate, endDate) {
    let months;
    months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();

    return months <= 0 ? 0 : months;
  }
  function checkIsNaN(prametr, string) {
    if (!prametr) {
      return console.log(
        `Параметр "${string}" содержит неправильное значение ${prametr}`
      );
    }
  }

  return totalAmount;
}



function getGreeting(name) {

  return `Привет, мир! Меня зовут ${name ? name : 'Аноним'}`;
}
