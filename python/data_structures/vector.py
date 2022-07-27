class MyVector:
    def __init__(self):
        self.current_size = 0
        self.max_size = 2
        self.data = [None] * self.max_size

    def _resize(self):
        new_data = [None] * self.max_size * 2
        for i in range(self.current_size):
            new_data[i] = self.data[i]
        self.data = new_data
        self.max_size *= 2

    def append(self, value):
        self.data[self.current_size] = value
        self.current_size += 1
        if self.current_size >= self.max_size:
            self._resize()

    def pop(self):
        self.current_size -= 1
        return_value = self.data[self.current_size]
        self.data[self.current_size] = None
        return return_value

    def length(self):
        return self.current_size


my_vector = MyVector()
assert my_vector.length() == 0
my_vector.append(1)
assert my_vector.length() == 1
my_vector.append(2)
assert my_vector.length() == 2
my_vector.append(3)
assert my_vector.length() == 3
my_vector.append(4)
assert my_vector.length() == 4
my_vector.append(5)
assert my_vector.length() == 5
my_vector.append(6)
assert my_vector.length() == 6
assert my_vector.pop() == 6
assert my_vector.length() == 5
assert my_vector.pop() == 5
assert my_vector.length() == 4
my_vector.append(6)
assert my_vector.length() == 5
assert my_vector.pop() == 6
assert my_vector.length() == 4
assert my_vector.pop() == 4
assert my_vector.length() == 3
assert my_vector.pop() == 3
assert my_vector.length() == 2
assert my_vector.pop() == 2
assert my_vector.length() == 1
assert my_vector.pop() == 1
assert my_vector.length() == 0
