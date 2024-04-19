function lifeInWeeks(age) {
    let maxAge = 90;
    let remainingYears = maxAge - age
    console.log(remainingYears * 365)
    console.log(remainingYears * 52)
    console.log(remainingYears * 12)
}
lifeInWeeks(56);

function bmiCalculator(weight, height) {
    let  bmi = weight / (height * height)
    bmi = Math.floor(bmi)
    return bmi 
}
let weight = 65;
let height = 1.8;
console.log(bmiCalculator(weight, height))



