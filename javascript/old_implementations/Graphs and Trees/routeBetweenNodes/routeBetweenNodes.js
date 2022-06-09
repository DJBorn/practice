// Check if there exists a path between two nodes in a graph
// Used BFS
var routeBetweenNodes = function(graph, nodeA, nodeB) {
	if(!graph.hasOwnProperty(nodeA) || !graph.hasOwnProperty(nodeB))
		return null;

	function BFS(start, destination) {
		var queue = [];
		queue.push(start);
		visited = {};
		var j = 100;
		while(queue.length > 0 && j) {
			var node = queue.shift();
			for(var i = 0; i < graph[node].length; i++) {
				var adj = graph[node][i];
				if(adj == destination)
					return true;
				if(!visited.hasOwnProperty(adj))
					queue.push(adj);
				visited[adj] = true;
			}
			j--
		}
		return false;
	}

	return BFS(nodeA, nodeB) || BFS(nodeB, nodeA);
}

var graph = {
	a: ['a', 'b'],
	b: ['c', 'a'],
	c: ['d'],
	d: ['e'],
	e: [],
	f: ['b', 'g'],
	g: []
}
console.log("Created Graph: ");
console.log(graph);
console.log("Is there a route between a and d? " + routeBetweenNodes(graph, 'a', 'e'));
console.log("Is there a route between f and a? " + routeBetweenNodes(graph, 'f', 'a'));
console.log("Is there a route between a and a? " + routeBetweenNodes(graph, 'a', 'a'));
console.log("Is there a route between a and g? " + routeBetweenNodes(graph, 'a', 'g'));