export class HashTable {
    constructor(size) {
        this.table = new Array(size).fill(null);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const sameKeyItem = bucket.find((item) => item[0] === key);

            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                console.log(`${key} : ${sameKeyItem[1]}`);
                return;
            } else {
                console.log(undefined);
                return;
            }
        }
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        const bucketIndex = bucket.findIndex((item) => item[0] === key);
        if (bucketIndex !== -1) {
            console.log("removed : ", key);

            bucket.splice(bucketIndex, 1);
        }
        if (bucket.length === 0) {
            this.table[index] = null;
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            // if (this.table[i]) {
            console.log(i, this.table[i]);
            // }
        }
    }
}

const table = new HashTable(5);

console.log("----------------------------- set methods ------------------------------------");

table.set("name", "Jasim");
table.set("name", "Ijas");
table.set("anme", "Rahil");
table.set("age", 23);
table.set("place", "Kalikavu");
table.set("father", "Salahudheen");
table.set("mother", "Rohiya mol");
table.set(2, "bikes");
table.set(1, "car");

table.display();

console.log("----------------------------- get methods ------------------------------------");

table.get("name");
table.get(112);
table.get("mother");
table.get(2);

console.log("----------------------------- remove methods ------------------------------------");

table.remove("name");
table.remove("place");
table.remove("nadsfame");

console.log("-----------------------------------------------------------------");

table.display();
