// An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

// For example:

// "listen" can be rearranged to form "silent."
// "evil" can become "vile."

// ----------------- 1 - APPROCH -------------------------//


const isAnagram = function (s, t) {
    s = s.split("").sort().join("");
    t = s.split("").sort().join("");

    return s === t;
};

// console.log(isAnagram("listen", "silent"));

// ----------------- 2 - APPROCH -------------------------//

const isAnagram2 = function (s, t) {
    if (s.length !== t.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;
};

console.log(isAnagram2("anagram", "nagaram"));
