var Trie = function() {
    var tree = {};

    this.insert = function(word) {
        if(typeof word != "string")
            return false;
        var currentNode = tree;
        for(var i = 0; i < word.length; i++) {
            if(!currentNode.hasOwnProperty(word[i])) {
                currentNode[word[i]] = {};
            }
            currentNode = currentNode[word[i]];
        }
        currentNode.endOfWord = true;
        return true;
    }

    this.exists = function(word) {
        if(typeof word != "string")
            return null;
        var currentNode = tree;
        for(var i = 0; i < word.length; i++) {
            if(!currentNode.hasOwnProperty(word[i]))
                return false;
            currentNode = currentNode[word[i]];
        }
        return currentNode.endOfWord;
    }
}
console.log("Create new Trie");
var trie = new Trie();
console.log("Insert 'the'");
console.log(trie.insert("the"));
console.log("Insert 'a'");
console.log(trie.insert("a"));
console.log("Insert 'there'");
console.log(trie.insert("there"));
console.log("Insert 'answer'");
console.log(trie.insert("answer"));
console.log("Insert 'any'");
console.log(trie.insert("any"));
console.log("Insert 'by'");
console.log(trie.insert("by"));
console.log("Insert 'bye'");
console.log(trie.insert("bye"));
console.log("Insert 'their'");
console.log(trie.insert("their"));
console.log("Check 'the' exists");
console.log(trie.exists("the"));
console.log("Check 'these' exists");
console.log(trie.exists("these"));
console.log("Check 'their' exists");
console.log(trie.exists("their"));
console.log("Check 'thaw' exists");
console.log(trie.exists("thaw"));
