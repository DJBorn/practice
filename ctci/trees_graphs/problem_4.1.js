
// Route Between Nodes
// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

// O(n) Time
// O(n) Space
// Where n is the # of nodes

class Node {
    constructor(data) {
        this.data = data;
        this.adjList = [];
    }
}

class Graph {
    constructor() {
        this.nodes = [];
    }
}

function routeBetweenNodes(graph, nodeA, nodeB) {
    let queue = [];

    for(let node of graph.nodes) {
        node.visited = false;
    }

    // BFS
    queue.push(nodeA);

    while(queue.length > 0) {
        let node = queue.shift();
        if(node.visited)
            continue;
        
        if(node === nodeB)
            return true;
        
        node.visited = true;
        
        for(let child of node.adjList) {
            queue.push(child);
        }
    }
    return false;
}

let graph = new Graph();
for(let i = 0; i < 10; i++) {
    graph.nodes.push(new Node(i));
}

graph.nodes[0].adjList.push(graph.nodes[1]);
graph.nodes[0].adjList.push(graph.nodes[2]);
graph.nodes[1].adjList.push(graph.nodes[2]);
graph.nodes[1].adjList.push(graph.nodes[4]);
graph.nodes[2].adjList.push(graph.nodes[3]);
graph.nodes[3].adjList.push(graph.nodes[4]);
graph.nodes[4].adjList.push(graph.nodes[5]);
graph.nodes[5].adjList.push(graph.nodes[3]);
graph.nodes[6].adjList.push(graph.nodes[0]);
graph.nodes[7].adjList.push(graph.nodes[8]);

console.assert(routeBetweenNodes(graph, graph.nodes[0], graph.nodes[1]) === true);
console.assert(routeBetweenNodes(graph, graph.nodes[0], graph.nodes[3]) === true);
console.assert(routeBetweenNodes(graph, graph.nodes[0], graph.nodes[4]) === true);
console.assert(routeBetweenNodes(graph, graph.nodes[0], graph.nodes[6]) === false);
console.assert(routeBetweenNodes(graph, graph.nodes[0], graph.nodes[7]) === false);
console.assert(routeBetweenNodes(graph, graph.nodes[7], graph.nodes[8]) === true);
console.assert(routeBetweenNodes(graph, graph.nodes[8], graph.nodes[7]) === false);
console.assert(routeBetweenNodes(graph, graph.nodes[5], graph.nodes[4]) === true);
console.assert(routeBetweenNodes(graph, graph.nodes[6], graph.nodes[4]) === true);