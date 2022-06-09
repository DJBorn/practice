class TrieNode {
    constructor() {
        this.isWord = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        // Input should be a string
        if(typeof word != "string")
            return -1;

        // Start at the root
        let currentNode = this.root;
        for(let i = 0; i < word.length; i++) {
            // If current character isn't a child of the current node, create it.
            if(!currentNode.children[word[i]])
                currentNode.children[word[i]] = new TrieNode();
            currentNode = currentNode.children[word[i]];
        }
        // Set the final node as a word
        currentNode.isWord = true;
    }

    search(word) {
        // Input should be a string
        if(typeof word != "string")
            return -1;
        let currentNode = this.root;
        for(let i = 0; i < word.length; i++) {
            if(!currentNode.children[word[i]])
                return false;
            currentNode = currentNode.children[word[i]];
        }
        return currentNode.isWord;
    }
}

let trie = new Trie();

trie.insert("hello");
console.assert(trie.search("hello") == true);
console.assert(trie.search("hell") == false);
trie.insert("hell");
console.assert(trie.search("hell") == true);
trie.insert("help");
console.assert(trie.search("help") == true);
trie.insert("film");
console.assert(trie.search("film") == true);
console.assert(trie.search("fi") == false);
console.assert(trie.search("fire") == false);
trie.insert("fire");
console.assert(trie.search("fire") == true);