class TrieNode:
    def __init__(self, is_terminal=False):
        self.children = [None] * 26
        self.is_terminal = is_terminal


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        current_node = self.root
        for char in word:
            char_index = ord(char) - ord("a")
            if current_node.children[char_index] is None:
                current_node.children[char_index] = TrieNode()
            current_node = current_node.children[char_index]
        current_node.is_terminal = True

    def search(self, word):
        current_node = self.root
        for char in word:
            char_index = ord(char) - ord("a")
            if current_node.children[char_index] is None:
                return False
            current_node = current_node.children[char_index]
        return current_node.is_terminal

    def starts_with(self, word):
        current_node = self.root
        for char in word:
            char_index = ord(char) - ord("a")
            if current_node.children[char_index] is None:
                return []
            current_node = current_node.children[char_index]
        return self._get_all_words_from_trie_node(word, current_node)

    def _get_all_words_from_trie_node(self, word, node):
        words = []
        if node.is_terminal:
            words.append(word)
        for i, node in enumerate(node.children):
            if node is not None:
                words = words + (self._get_all_words_from_trie_node(word + chr(ord("a") + i), node))
        return words

trie = Trie()
trie.insert("cab")
trie.insert("cabination")
trie.insert("cabinet")
trie.insert("c")

assert trie.search("cab") == True
assert trie.search("cabination") == True
assert trie.search("cabinet") == True
assert trie.search("c") == True
assert trie.search("ca") == False
assert trie.search("cabinationa") == False
assert trie.search("cabinatio") == False
assert set(trie.starts_with("c")) == {"c", "cab", "cabinet", "cabination"}
assert set(trie.starts_with("ca")) == {"cab", "cabinet", "cabination"}
assert set(trie.starts_with("cab")) == {"cab", "cabinet", "cabination"}
assert set(trie.starts_with("cabi")) == {"cabinet", "cabination"}