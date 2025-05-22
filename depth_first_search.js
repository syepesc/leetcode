// Practice DFS algorithm

// Graph
//         0
//       /    \
//     3       1
//  /  |  \      \
// 7   6   4   -   2
//         |
//         5

// Array of Edges (Directed Graph )
const nodes = 8
const arrayOfEdges = [[0, 1], [1, 2], [0, 3], [3, 4], [3, 6], [3, 7], [4, 2], [4, 5], [5, 2]]

// 1. When having an array of edges whe can convert it into an Adjacency Matrix
function adjacencyMatrix() {
    const m = [];
    for (let i = 0; i < nodes; i++) {
        m[i] = Array(nodes).fill(0);
    };
    for (let i = 0; i < arrayOfEdges.length; i++) {
        // If we want an Undirected Graph we should invert the position
        // m[arrayOfEdges[i][1]][arrayOfEdges[i][0]] = 1;
        m[arrayOfEdges[i][0]][arrayOfEdges[i][1]] = 1;
    }
    return m
};

// console.log(adjacencyMatrix());
// Adjacency Matrix (Directed)
// [
//     [0, 1, 0, 1, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 1, 1],
//     [0, 0, 1, 0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0]
// ]

// 2. When having an array of edges whe can convert it into an Adjacency List
function adjacencyMap() {
    const m = new Map()
    for (let i = 0; i < arrayOfEdges.length; i++) {
        if (m.has(arrayOfEdges[i][0])) {
            m.set(arrayOfEdges[i][0], [...m.get(arrayOfEdges[i][0]), arrayOfEdges[i][1]])
        }
        else {
            m.set(arrayOfEdges[i][0], [arrayOfEdges[i][1]])
        }
    }
    return m
};

// console.log(adjacencyMap());
// Adjacency List (Directed)
// Map(5) {
//   0 => [ 1, 3 ],
//   1 => [ 2 ],
//   3 => [ 4, 6, 7 ],
//   4 => [ 2, 5 ],
//   5 => [ 2 ]
// }

// 3. DFS
function dfsRecursive(node) {
    console.log(node)
    const graph = adjacencyMap();
    const neighbors = graph.get(node) || [];

    for (let nb of neighbors) {
        if (!seen.has(nb)) {
            seen.add(nb);
            dfsRecursive(nb);
        };
    };
}

// 4. DFS with a stack

function dfs(source) {
    const graph = adjacencyMap();
    const stack = [source]
    const seen = new Set()
    seen.add(source)

    while (stack.length != 0) {
        let node = stack.pop()
        let neighbors = graph.get(node) || [];
        console.log(node)

        for (let nb of neighbors) {
            if (!seen.has(nb)) {
                seen.add(nb)
                stack.push(nb)
            }
        }
    }
}


const source = 0
const seen = new Set()
seen.add(source)
dfsRecursive(source) // 0, 1, 2, 3, 4, 5, 6, 7
dfs(source) // 0, 3, 7, 6, 4, 5, 2, 1