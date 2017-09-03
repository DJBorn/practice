// A simple hash table implementation of strings
var Hash_Table = function Hash_Table (size) {
    var table_size = size;
    var table = [];

    // Searches for the index of the key in a specific bucket
    function find_key_index(index, str) {
        // Bucket does not exist or has length 0
        if(table[index] === undefined || table[index].length == 0)
            return -1;
        for(var i = 0; i < table[index].length; i++) {
            if(table[index][i][0] == str)
                return i;
        }
        // Completely searched through the bucket and the key was not found
        return -1;
    }

    this.print_table = function() {
        console.log(table);
    }

    this.insert = function (str, val) {
        var index = hash_function(str);
        var list_index = find_key_index(index, str);
        if(list_index < 0) {
            // Create a new bucket if it does not exist
            if(table[index] === undefined)
                table[index] = [];
            table[index].push([str, val]);
        }
        else{
            table[index][list_index][1] = val;
        }
    }

    this.delete = function (str) {
        var index = hash_function(str);
        var list_index = find_key_index(index, str);
        if(list_index >= 0)
            table[index].splice(list_index, 1);
    }

    this.retreive = function(str) {
        var index = hash_function(str);
        var list_index = find_key_index(index, str);
        if(list_index < 0)
            return -1;
        else {
            return table[index][list_index][1];
        }
    }

    // Using djb2 hash function
    function hash_function (str) {
        if(typeof str !== "string")
            return -1;
        var hash = 5391;
        var c;
        for(var i = 0; i < str.length; i++) {
            hash = ((hash << 5) + hash) + str.charCodeAt(i);
        }
        return Math.abs(hash)%table_size;
    }
}

console.log("Create small Hash Table of size 10");
var hash_table = new Hash_Table(10);
console.log("Simple insert: (dupe, 12)")
hash_table.insert("dupe", 12);
console.log("Retreiving value dupe: " + hash_table.retreive("dupe"));
console.log("Insert duplicate: (dupe, 3)")
hash_table.insert("dupe", 3);
console.log("Retreiving value dupe: " + hash_table.retreive("dupe"));
console.log("Delete dupe")
hash_table.delete("dupe");
console.log("Retreiving value dupe: " + hash_table.retreive("dupe"));
console.log("Delete none existing key: none")
hash_table.delete("none");

console.log("Create table of size 128 and insert several random strings to test distribution:")
var hash_table_large = new Hash_Table(128)

for(var i = 0; i < 1000; i++) {
    var str = "";
    for(var j = 0; j < 1000; j++)
        str += String.fromCharCode((Math.floor(Math.random()*2) ? 97 : 65) + Math.floor((Math.random() * 26)));
    hash_table_large.insert(str, 1);
}

hash_table_large.print_table();