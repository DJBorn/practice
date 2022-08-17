from python.data_structures.tree import BST
from python.data_structures.stack import Stack


def dfs(stack: Stack):
    while not stack.is_empty():
        current_node = stack.pop()
        current_node.visited = True
        print(f"Visited node {current_node.value}")

        if current_node.right is not None and not current_node.right.visited:
            stack.insert(current_node.right)
        if current_node.left is not None and not current_node.left.visited:
            stack.insert(current_node.left)


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

stack = Stack()
stack.insert(tree.root)
dfs(stack)