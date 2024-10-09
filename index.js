//Write your solutions in this file, don't forget to test your functions.

//1.
const countFromOne = (num) => {
  for (let i = 1; i <= num; i += 1) {
    //would not work with return
    console.log(i);
  }
};
//countFromOne(13);

//2
const countEveryOdd = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  return "done";
};
//countEveryOdd(55);

//3
const isNegative = (num) => {
  // you can alse write it like this >>
  return num < 0;
  /*if (num < 0) {
    return true;
  } else {
    return false;
  }*/
};
//console.log(isNegative(-2));

//4
const betweenFiveAndTwenty = (num) => {
  if (num >= 5 && num <= 20) {
    return true;
  } else {
    return false;
  }
};
//console.log(betweenFiveAndTwenty(12));

//5
const sumOfThreeOrFive = () => {
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};
//console.log(sumOfThreeOrFive());

//6
const isAllLowerCase = (str) => {
  if (str.toLowerCase() === str) {
    return true;
  } else {
    return false;
  }
  //return str.toLowerCase() === str;
};

console.log(isAllLowerCase("hello"));
console.log(isAllLowerCase("seven eleven"));
console.log(isAllLowerCase("Seven eleven has the best slushies"));
//BONUS QUESTION
const countMultiplesOfFive = (array) => {};
