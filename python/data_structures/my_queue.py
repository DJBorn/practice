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

    def dequeue(self):
        if self.head is None:
            return
        return_value = self.head.value
        self.head = self.head.next
        if self.head is None:
            self.tail = None
        return return_value

    def is_empty(self):
        return self.head is None


my_queue = MyQueue()
my_queue.insert(1)
my_queue.insert(2)
my_queue.insert(3)
my_queue.insert(4)

assert my_queue.dequeue() == 1
assert my_queue.dequeue() == 2
my_queue.insert(5)
assert my_queue.dequeue() == 3
assert my_queue.dequeue() == 4
assert my_queue.dequeue() == 5
