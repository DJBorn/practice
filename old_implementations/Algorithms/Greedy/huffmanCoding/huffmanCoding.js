// Implement Huffman coding
// O(nlogn) Time
// O(n) Space

var huffmanCoding = function(freq) {
    var minHeap = new MinHeap();
    var encoding = {};
    
    if(freq.length === 1) {
        var ret = {};
        ret[freq[0].char] = "0";
        return ret;
    }

    // Insert into minheap
    for(let i = 0; i < freq.length; i++) {
        minHeap.insert(freq[i]);
    }

    // Create internal nodes
    while(minHeap.length() > 1) {
        var leftNode = minHeap.extract();
        var rightNode = minHeap.extract();
        var newNode = {
            freq: leftNode.freq + rightNode.freq,
            left: leftNode,
            right: rightNode
        };
        minHeap.insert(newNode);
    }
    
    // Traverse and construct the encoding of each character
    function constructEncoding(root, codeSoFar) {
        if(!root)
            return;
        if(!root.left && !root.right)
            encoding[root.char] = codeSoFar;
        else {
            constructEncoding(root.left, codeSoFar + "0");
            constructEncoding(root.right, codeSoFar + "1");
        }
    }
    constructEncoding(minHeap.extract(), "");
    return encoding;
}

var freq1 = [
    {
        char: 'a',
        freq: 5
    },
    {
        char: 'b',
        freq: 9
    },
    {
        char: 'c',
        freq: 12
    },
    {
        char: 'd',
        freq: 13
    },
    {
        char: 'e',
        freq: 16
    },
    {
        char: 'f',
        freq: 45
    },
];

var freq2 = [
    {
        char: 'a',
        freq: 5
    }
];

var freq3 = [
    {
        char: 'a',
        freq: 5
    },
    {
        char: 'b',
        freq: 4333 
    },
    {
        char: 'c',
        freq: 23
    },
    {
        char: 'd',
        freq: 1234
    },
    {
        char: 'e',
        freq: 234
    },
    {
        char: 'f',
        freq: 239
    },
    {
        char: 'g',
        freq: 3212
    },
    {
        char: 'h',
        freq: 34
    },
    {
        char: 'i',
        freq: 232
    },
    {
        char: 'j',
        freq: 1232
    },
    {
        char: 'k',
        freq: 3491
    }
];

console.log("Encode a5 b9 c12 d13 e16 f45:")
console.log(huffmanCoding(freq1));
console.log("Encode a5:")
console.log(huffmanCoding(freq2));
console.log("Encode a5:")
console.log(huffmanCoding(freq3));