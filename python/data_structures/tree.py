class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BST:
    def __init__(self):
        self.root = None

    def add_value(self, value):
        if self.root is None:
            self.root = Node(value)
            return
        cur_node = self.root
        while True:
            if value < cur_node.value:
                if cur_node.left is None:
                    cur_node.left = Node(value)
                    break
                cur_node = cur_node.left
            elif value > cur_node.value:
                if cur_node.right is None:
                    cur_node.right = Node(value)
                    break
                cur_node = cur_node.right

    def print_tree(self):
        print(self.root)


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
tree.print_tree()
