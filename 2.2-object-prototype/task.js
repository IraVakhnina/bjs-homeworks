//Задача № 1

String.prototype.isPalindrome = function () {
  const str = this.toString().toLowerCase().replace(/ /g, "");

  const strReverse = [...str].reduce((prev, next) => next + prev);

  let result = str === strReverse ? true : false;
  return result;
};




//Задача № 2

function getAverageMark(marks) {
  let sum;
  if (marks.length === 0) {
    return 0;
  } else {
    return (sum = Math.round(marks.reduce((x, y) => x + y) / marks.length));
  }
}


//Задача № 3

function checkBirthday(birthday) {
  let now = Math.round(Date.now());
  birthday = Date.parse(birthday);
  let diff = now - birthday;

  const userBirthday = 365.25 * 24 * 60 * 60 * 1000;
  let age = diff / userBirthday;
  return age > 18 ? true : false;

  //return verdict;
}