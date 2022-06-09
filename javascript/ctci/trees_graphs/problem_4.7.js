// Build Order
// You are given a list of projects and a list of dependencies(which is a list of pairs of projects, where the second project is dependent on the first project).All of a project’s dependencies must be built before the project is.Find a build order that will allow the projects to be built.If there is no valid build order, return an error.

// EXAMPLE
// Input
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// Output: f, e, a, b, d, c

// O(u + v) Time
// O(v) Space
// u = number of edges
// v = number of vertices

const helpers = require('./helpers.js');

class Graph {
	constructor(verticesArr) {
		this.adjList = {};
		for (let vertex of verticesArr) {
			this.adjList[vertex] = [];
		}
	}
	addEdge(u, v) {
		this.adjList[u].push(v);
	}
}

function buildOrder(projects, dependencies) {
	let graph = new Graph(projects);
	let result = [];
	for (let i of dependencies) {
		graph.addEdge(i[1], i[0]);
	}

	let unvisited = new Set();
	let visiting = new Set();
	let visited = new Set();

	for (let i of projects) unvisited.add(i);


	while (unvisited.size > 0) {
		const node = unvisited.values().next().value;
		DFS(graph, node, unvisited, visiting, visited, result);
	}
	return result;
}

function DFS(graph, node, unvisited, visiting, visited, result) {
	if (visited.has(node)) return;
	if (visiting.has(node)) throw new Error("Cannot complete project");
	moveSets(unvisited, visiting, node);
	for (let child of graph.adjList[node]) {
		DFS(graph, child, unvisited, visiting, visited, result);
	}
	moveSets(visiting, visited, node);
	result.push(node);
}

function moveSets(set1, set2, value) {
	set1.delete(value);
	set2.add(value);
}
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)

console.assert(helpers.arrEqual(buildOrder(['a', 'b', 'c', 'd', 'e', 'f'], [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']]), ['f', 'a', 'b', 'd', 'c', 'e']) === true);

try {
	buildOrder(['a', 'b', 'c', 'd', 'e', 'f'], [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c'], ['c', 'f']]);
} catch(e) {
	console.assert(e.message === "Cannot complete project");
}
