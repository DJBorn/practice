class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Queue:
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


queue = Queue()
queue.insert(1)
queue.insert(2)
queue.insert(3)
queue.insert(4)

assert queue.dequeue() == 1
assert queue.dequeue() == 2
queue.insert(5)
assert queue.dequeue() == 3
assert queue.dequeue() == 4
assert queue.dequeue() == 5
