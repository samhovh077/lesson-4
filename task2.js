function findMissingNumber(arr) {

    let step;

    arr.sort((a, b) => a - b);

    let firstGap = arr[1] - arr[0];
    let lastGap = arr[arr.length - 1] - arr[arr.length - 2];

    if (firstGap <= lastGap) {
        step = firstGap;
    } else {
        return arr[0] + lastGap;
    }


    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] > step) {
            return arr[i] + step;
        }
    }

    return "no missing number";
}

console.log(findMissingNumber([2, 4, 6, 8, 12]));
console.log(findMissingNumber([3, 6, 9, 12, 15, 18]));



