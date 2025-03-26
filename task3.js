function sumDigitArrays(arr1, arr2) {
    let remainder = 0;
    let result = [];
    const length = arr1.length > arr2.length ? arr1.length : arr2.length;
    for (let i = 0; i < length || remainder > 0; i++) {

        let arr1Item = arr1[i] ? arr1[i] : 0;
        let arr2Item = arr2[i] ? arr2[i] : 0;

        let sum = 0;
        sum = arr1Item + arr2Item + remainder;
        remainder = Math.floor(sum / 10);
        result.push(sum % 10);
    }
    return result;
}

console.log(sumDigitArrays([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
console.log(sumDigitArrays([0], [0]));
console.log(sumDigitArrays([2, 4, 3], [5, 6, 4]));
