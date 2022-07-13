class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Stack:
    def __init__(self):
        self.head = None

    def insert(self, value):
        if self.head is None:
            self.head = Node(value)
        else:
            new_head = Node(value)
            new_head.next = self.head
            self.head = new_head

    def pop(self):
        if self.head is None:
            return
        return_value = self.head.value
        self.head = self.head.next
        return return_value


stack = Stack()
stack.insert(1)
stack.insert(2)
stack.insert(3)
stack.insert(4)

assert stack.pop() == 4
assert stack.pop() == 3
stack.insert(3)
assert stack.pop() == 3
assert stack.pop() == 2
assert stack.pop() == 1
