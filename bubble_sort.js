function bubble_sort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            };
        };
    };

    return arr;
}

console.log(bubble_sort([29, 10, 50, 34, 33, 33, 76, 14, 37, 14]))
