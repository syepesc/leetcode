function selection_sort(arr) {
    const n = arr.length

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i; j < n; j++) {
            // console.log(i, j)
            if (arr[j] < arr[min]) {
                min = j;
            };
        };
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        };
    };

    return arr;
}

console.log(selection_sort([29, 10, 50, 34, 33, 33, 76, 14, 37, 14]))
