class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class MyQueue:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert(self, value):
        if self.head is None:
            self.head = Node(value)
            self.tail = self.head
        else:
            self.tail.next = Node(value)
            self.tail = self.tail.next

    def demy_queue(self):
        if self.head is None:
            return
        return_value = self.head.value
        self.head = self.head.next
        if self.head is None:
            self.tail = None
        return return_value


my_queue = MyQueue()
my_queue.insert(1)
my_queue.insert(2)
my_queue.insert(3)
my_queue.insert(4)

assert my_queue.demy_queue() == 1
assert my_queue.demy_queue() == 2
my_queue.insert(5)
assert my_queue.demy_queue() == 3
assert my_queue.demy_queue() == 4
assert my_queue.demy_queue() == 5
