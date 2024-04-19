let output = [];

// using for-loop is more shortcut that while-loop

function fizzBuzz() {
    for(let count = 1; count < 101; count++) {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
    console.log(output);
}
}

fizzBuzz();
