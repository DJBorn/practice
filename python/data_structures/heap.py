import math


class MaxHeap:
    def __init__(self):
        self.data = []

    def _swap(self, index1, index2):
        temp = self.data[index1]
        self.data[index1] = self.data[index2]
        self.data[index2] = temp

    def _bubble_down(self, index):
        left_child_index = (index * 2) + 1
        right_child_index = (index * 2) + 2
        greater_child = -math.inf
        greater_child_index = None
        if right_child_index < len(self.data):
            greater_child_index = right_child_index
            greater_child = self.data[right_child_index]

        if (
            left_child_index < len(self.data)
            and self.data[left_child_index] > greater_child
        ):
            greater_child_index = left_child_index

        if greater_child_index is None:
            return

        if self.data[index] < self.data[greater_child_index]:
            self._swap(index, greater_child_index)
            self._bubble_down(greater_child_index)

    def _bubble_up(self, index):
        parent_index = math.floor((index - 1) / 2)
        if index > 0 and self.data[index] > self.data[parent_index]:
            self._swap(index, parent_index)
            self._bubble_up(parent_index)

    def insert(self, value):
        self.data.append(value)
        self._bubble_up(len(self.data) - 1)

    def peek(self):
        return self.data[0]

    def pop(self):
        return_value = self.data[0]
        self._swap(0, len(self.data) - 1)
        self.data.pop()
        self._bubble_down(0)
        return return_value


my_heap = MaxHeap()

my_heap.insert(10)
my_heap.insert(15)
my_heap.insert(20)
my_heap.insert(25)
my_heap.insert(30)
my_heap.insert(35)
my_heap.insert(40)

assert my_heap.peek() == 40
assert my_heap.pop() == 40
assert my_heap.peek() == 35
assert my_heap.pop() == 35
assert my_heap.peek() == 30
my_heap.insert(26)
my_heap.insert(55)
assert my_heap.peek() == 55
assert my_heap.pop() == 55
assert my_heap.pop() == 30
assert my_heap.peek() == 26
assert my_heap.pop() == 26
assert my_heap.peek() == 25
assert my_heap.pop() == 25
assert my_heap.peek() == 20
