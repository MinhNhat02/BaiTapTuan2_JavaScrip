/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//Data 1:
const scoreDolphins =  (96 + 108 + 89)/3;
const scoreKoalas = (88 + 91 + 110) /3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas){
    console.log('Dolphins win !!!');
} else if(scoreKoalas > scoreDolphins){
    console.log('Koalas win !!!');
} else if(scoreDolphins === scoreKoalas){
    console.log('2 đội hòa nhau !!!');
}


// //Data Bonus 1:
// const scoreDolphins2 =  (97 + 112 + 101) /3;
// const scoreKoalas2 = (109 + 115 + 123) /3;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas){
//     console.log('Dolphins win !!!');
// } else if(scoreKoalas > scoreDolphins){
//     console.log('Koalas win !!!');
// } else if(scoreDolphins === scoreKoalas){
//     console.log('2 đội hòa nhau !!!');
// }

// //Data Bonus 2:
// const scoreDolphins3 =  (97 + 112 + 101) /3;
// const scoreKoalas3 = (109 + 95 + 106) /3;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas){
//     console.log('Dolphins win !!!');
// } else if(scoreKoalas > scoreDolphins){
//     console.log('Koalas win !!!');
// } else if(scoreDolphins === scoreKoalas){
//     console.log('2 đội hòa nhau !!!');
// }