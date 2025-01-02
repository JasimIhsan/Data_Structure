class HashTable {
    constructor(size) {
        this.table = new Array(size).fill(null);
        this.size = size;
        this.keys = 0;
        this.loadFactorThreshold = 0.7;
    }

    hash(key) {
        let total = 0;
        let str = key.toString();
        for (let i = 0; i < str.length; i++) {
            total += str.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        if (this.keys / this.size > this.loadFactorThreshold) {
            this.resize();
        }
        let index = this.hash(key);
        let startIndex = index;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                this.table[index][1] = value;
                return;
            }
            index = (index + 1) % this.size;
            if (index === startIndex) {
                console.error("HashTable is full! Consider resizing.");
                break;
            }
        }
        this.table[index] = [key, value];
        this.keys++;
    } 

    get(key) {
        let index = this.hash(key);
        let startIndex = index;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + 1) % this.size;
            if (index === startIndex) {
                break;
            }
        }

        return undefined;
    }

    remove(key) {
        let index = this.hash(key);
        let startIndex = index;
        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                this.table[index] = null;
            }

            index = (index + 1) % this.size;

            if (index === startIndex) {
                break;
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== null) {
                console.log(`${i} >> [ ${this.table[i].join(" : ")} ]`);
            }
        }
    }

    resize() {
        console.log("Resizing table...");
        const oldTable = this.table;
        this.size = this.size * 2;
        this.table = new Array(this.size).fill(null);
        this.keys = 0;

        for (let bucket of oldTable) {
            if (bucket !== null) {
                const [key, value] = bucket;
                this.set(key, value);
            }
        }
        console.log("Resize complete. New size:", this.size);
    }
}

const table = new HashTable(5);

table.set("name", "Jasim");
table.set("mane", "Footaball player");
table.set("amne", "Ihsan");
table.set("amne", "sahla");
table.set("age", 23);
table.set("place", "Kalikavu");
table.set("father", "Salahudheen");
table.set("mother", "Rohiya mol");

// table.set("name", "Jasim");
// table.set("mane", "Football player");
// table.set("amne", "Ihsan");
// table.set("amne", "Sahla");
// table.set("age", 23);
// table.set("place", "Kalikavu");
// table.set("father", "Salahudheen");
// table.set("mother", "Rohiya mol");
// table.set("country", "India");
// table.set("city", "Malappuram");
// table.set("profession", "Engineer");
// table.set("hobby", "Cricket");
// table.set("food", "Biriyani");
// table.set("sport", "Football");
// table.set("device", "Laptop");
// table.set("brand", "Byteverse");
// table.set("model", "X300");
// table.set("language", "JavaScript");
// table.set("framework", "React");
// table.set("library", "Redux");
// table.set("os", "Fedora");
// table.set("movie", "Inception");
// table.set("book", "Atomic Habits");
// table.set("music", "Classical");
// table.set("friend", "Ali");
// table.set("pet", "Cat");
// table.set("color", "Blue");
// table.set("season", "Winter");
// table.set("planet", "Earth");
// table.set("universe", "Milky Way");
// table.set("vehicle", "Bike");
// table.set("fuel", "Petrol");
// table.set("skill", "Coding");
// table.set("habit", "Reading");
// table.set("dream", "Travel the world");
// table.set("goal", "Fitness");
// table.set("teacher", "Mr. John");
// table.set("student", "Sara");
// table.set("partner", "Ahmad");
// table.set("company", "TechCorp");
// table.set("boss", "Mr. Smith");
// table.set("team", "Developers");
// table.set("game", "Chess");
// table.set("tool", "Hammer");
// table.set("language2", "Python");
// table.set("hobby2", "Photography");
// table.set("dish", "Pizza");
// table.set("continent", "Asia");
// table.set("project", "Byteverse");
// table.set("deadline", "Tomorrow");

console.log("\n------------------- Table Contents: ------------------\n");
table.display();

console.log("\n------------------- get methods: ------------------\n");

console.log("Get 'name':", table.get("name")); // Output: Jasim
console.log("Get 'place':", table.get("place")); // Output: Kalikavu
console.log("Get 'puttu':", table.get("puttu")); // Output: Kalikavu

console.log("\n------------------- remove methods: ------------------\n");

table.remove("age");
table.remove("place");
console.log("After Removing 'age & place':\n");
table.display();
6