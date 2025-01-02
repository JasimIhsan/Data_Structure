class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    delete(word) {
        return this.deleteHelper(this.root, word, 0);
    }

    deleteHelper(node, word, depth) {
        if (!node) return null

        if (depth === word.length) {
            if (!node.isEndOfWord) return false;
            node.isEndOfWord = false;

            return Object.keys(node.children).length === 0;
        }


        const char = word[depth];
        if (this.deleteHelper(node.children[char], word, depth + 1)) {
            delete node.children[char];
            return Object.keys(node.children).length === 0 && !node.isEndOfWord;
        }

        return false;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                console.log('Not Found')
                return;
            }
            node = node.children[char];
        }
        // return true;


        const words = [];
        const collectWords = (node, currentPrefix) => {
            if (node.isEndOfWord) {
                words.push(currentPrefix);
            }
            for (const char in node.children) {
                collectWords(node.children[char], currentPrefix + char);
            }
        }
        collectWords(node, prefix);

        console.log(`Words Starts with '${prefix}' : `, words)

    }

    largestCommonPrefix() {
        let node = this.root;
        let str = '';
        while (node && Object.keys(node.children).length === 1 && !node.isEndOfWord) {
            let char = Object.keys(node.children)[0];
            console.log('char : ', char)
            str += char;
            node = node.children[char];
        }
        return str;
    }


    listAllWords() {
        const words = [];

        const collectWords = (node, prefix) => {
            if (node.isEndOfWord) words.push(prefix);

            for (const char in node.children) {
                collectWords(node.children[char], prefix + char);
            }
        }

        collectWords(this.root, '');
        console.log("All words : ", words);
    }

}

const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("cart");
trie.insert('Ball');
trie.insert('Bat');
trie.insert('BatMan');

// console.log('Before Deleting Car')
// trie.listAllWords()

// console.log('After Deleting Car')
// trie.delete("car")

// console.log('Searched cat    : ', trie.search("cat")); // true
// console.log('Searched cap    : ', trie.search("cap")); // false

// trie.startsWith("b")
// trie.startsWith("card")
// trie.startsWith('pet')

console.log(trie.largestCommonPrefix())


// console.log(trie.root)
trie.listAllWords()