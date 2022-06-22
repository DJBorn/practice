class ListGraph:
    def __init__(self, nodes=None):
        if nodes is None:
            nodes = []
        self.nodes = nodes


class Node:
    def __init__(self, nodes=None):
        if nodes is None:
            nodes = []
        self.children = nodes

    def add_edge(self, dest):
        self.children.append(dest)


class MatrixGraph:
    def __init__(self, total_nodes):
        self.adjacency_matrix = [
            [0 for _ in range(total_nodes)] for _ in range(total_nodes)
        ]

    def add_edge(self, src, dest):
        self.adjacency_matrix[src][dest] = 1


node1 = Node()
node2 = Node()
node3 = Node()
node4 = Node()
node5 = Node()
node1.add_edge(node2)
node1.add_edge(node3)
node2.add_edge(node3)
node3.add_edge(node2)
node4.add_edge(node5)

list_graph = ListGraph([node1, node2, node3, node4, node5])

matrix_graph = MatrixGraph(5)
matrix_graph.add_edge(0, 1)
matrix_graph.add_edge(0, 2)
matrix_graph.add_edge(1, 2)
matrix_graph.add_edge(2, 1)
matrix_graph.add_edge(3, 4)

assert node1.children[0] == node2
assert node1.children[1] == node3
assert node2.children[0] == node3
assert node3.children[0] == node2
assert node4.children[0] == node5

assert matrix_graph.adjacency_matrix[0][1] == 1
assert matrix_graph.adjacency_matrix[0][2] == 1
assert matrix_graph.adjacency_matrix[1][2] == 1
assert matrix_graph.adjacency_matrix[2][1] == 1
assert matrix_graph.adjacency_matrix[3][4] == 1
