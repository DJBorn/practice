class HashTable:
    def __init__(self):
        self.hash_size = 10
        self.data = []
        for i in range(self.hash_size):
            self.data.append([])

    def _hash_function(self, key: str):
        ascii_sum = sum(map(ord, key))
        hash_index = ascii_sum % self.hash_size
        return hash_index

    def get(self, key):
        index = self._hash_function(key)
        for entry in self.data[index]:
            if entry[0] == key:
                return entry[1]
        return None

    def set(self, key, value):
        index = self._hash_function(key)
        self.data[index].append([key, value])


my_hash = HashTable()
my_hash.set("daniel", 123)
my_hash.set("billy", 222)
my_hash.set("eaniek", 321)
assert my_hash.get("daniel") == 123
assert my_hash.get("billy") == 222
assert my_hash.get("eaniek") == 321
assert my_hash.get("eanhel") is None
