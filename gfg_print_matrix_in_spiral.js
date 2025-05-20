// https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1


function printMatrixInSpiral(matrix) {
    let result = []
    let tmpMatrix = matrix
    while (true) {
        let [nm1, r1] = topRowLeftToRight(tmpMatrix)
        tmpMatrix = nm1
        result = [...result, r1]
        if (nm1.length === 0) {
            break
        }

        let [nm2, r2] = lastColumnUpToDown(tmpMatrix)
        tmpMatrix = nm2
        result = [...result, r2]
        if (nm2.length === 0) {
            break
        }

        let [nm3, r3] = bottomRowRightToLeft(tmpMatrix)
        tmpMatrix = nm3
        result = [...result, r3]
        if (nm3.length === 0) {
            break
        }

        let [nm4, r4] = firstColumnDownToUp(tmpMatrix)
        tmpMatrix = nm4
        result = [...result, r4]
        if (nm4.length === 0) {
            break
        }
    }
    return result.toString()
}

function topRowLeftToRight(matrix) {
    const result = matrix[0]

    return [matrix.slice(1), result]
}

function lastColumnUpToDown(matrix) {
    const result = []
    const m = matrix.length;

    for (let i = 0; i < m; i++) {
        result.push(matrix[i].pop())
    }
    return [matrix, result]
}

function bottomRowRightToLeft(matrix) {
    const bottomRow = matrix[matrix.length - 1]
    return [matrix.slice(0, matrix.length - 1), bottomRow.toReversed()]
}

function firstColumnDownToUp(matrix) {
    const result = []

    for (let i = 0; i < matrix.length; i++) {
        result.push(matrix[i][0])
        matrix[i].shift()
    }

    return [matrix, result.toReversed()]
}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

console.log(printMatrixInSpiral(matrix))
