// Breadth First Search

var graph = {
	adj: [[1, 2],
		  [0, 3],
		  [0, 3],
		  [1, 2]]
}

/*
	Tree looks like this
		0
	   / \
	  1   2
	   \ /
	    3
	Should print 0 first and 3 last in bfs
*/

function bfs(graph) {
	var queue = [0];

	if(graph.adj == null || graph.adj.length == 0)
		return;

	var checked = {"0": true};

	while(queue.length > 0) {
		var element = queue.shift();
		console.log(element + " ");

		for(let i = 0; i < graph.adj[element].length; i++) {
			var enqueue = graph.adj[element][i];
			if(!checked[enqueue]){
				queue.push(enqueue);
				checked[enqueue] = true;
			}
		}
	}
}

bfs(graph);