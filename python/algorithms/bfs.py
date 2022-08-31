from python.data_structures.tree import BST
from python.data_structures.my_queue import MyQueue


def bfs(queue: MyQueue):
    while not queue.is_empty():
        current_node = queue.dequeue()
        current_node.visited = True
        print(f"Visited node {current_node.value}")

        if current_node.left is not None and not current_node.left.visited:
            queue.insert(current_node.left)
        if current_node.right is not None and not current_node.right.visited:
            queue.insert(current_node.right)


tree = BST()
tree.add_value(4)
tree.add_value(2)
tree.add_value(1)
tree.add_value(3)
tree.add_value(5)
tree.add_value(6)
tree.add_value(8)
tree.add_value(7)
tree.add_value(10)

queue = MyQueue()
queue.insert(tree.root)
bfs(queue)
