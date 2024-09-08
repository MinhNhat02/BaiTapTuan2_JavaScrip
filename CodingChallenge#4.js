// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it >= 50 && <= 300

const calcTip = function(bill){
    return bill>=50 && bill<=300 ? bill * 0.15 : bill * 0.2}
const Tip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

    const bills = [125,555,44];
    const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
    const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
    
    console.log(bills,tips,totals)
    