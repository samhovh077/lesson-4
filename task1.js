function findIndex(sortedArr, num) {
    let start = 0;
    let end = sortedArr.length - 1;

    for (; start <= end;) {
        let midpoint = Math.floor((start + end) / 2);

        if (sortedArr[midpoint] === num) {
            return midpoint;
        } else if (sortedArr[midpoint] > num) {
            end = midpoint - 1;
        } else {
            start = midpoint + 1;
        }
    }
    return -1;
}

console.log(findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 11));
console.log(findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));