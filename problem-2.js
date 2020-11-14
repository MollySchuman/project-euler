function fibonacci(sumToRange) {
    var sum = 0;
    var currTerm = 1;
    var prevTerm = 0;

    while (currTerm <= sumToRange) {
        var temp = currTerm;
        sum = (currTerm % 2 === 0) ? sum + currTerm : sum;
        currTerm = prevTerm + currTerm;
        prevTerm = temp;
    }

    return sum;
}

console.log(fibonacci(4000000));