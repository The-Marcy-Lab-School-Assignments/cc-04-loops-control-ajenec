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
const sumOfThreeOrFive = (num) => {
  if (num % 3 || num % 5) {
    return true;
  } else {
    return false;
  }
};
console.log(sumOfThreeOrFive(15));

//6
const isAllLowerCase = () => {};

//BONUS QUESTION
