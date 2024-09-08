// Coding Challenge #5
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


const calcAverage = (a,b,c) => (a+b+c)/3;
console.log(calcAverage(3,4,5))

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(10,4,2);
console.log(scoreDolphins,scoreKoalas)

const checkWinner = function(avgDolhins,avgKoalas){
    if(avgDolhins > 2* avgKoalas){
        console.log(`Dolphins win`)
    }else if(avgKoalas > 2* avgDolhins){
        console.log(`Koalas win`)
    }else{
        console.log('Không 1 team nào win!!!')
    }
}
checkWinner(scoreDolphins,scoreKoalas);