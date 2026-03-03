// C1:
// Time: O(NlogN) vì sử dụng sort, space: O(1)
// function isAnagram(s, t) {
//     const s1 = s.split("").sort().join("");
//     const t1 = t.split("").sort().join("");
//     return s1 === t1;

// }


// C2:
function isAnagram(s, t) {
    const charCount = new Map();

    for (let i = 0; i < s.length; i++) {
        if (charCount.has(s[i])) {
            charCount.set(s[i], charCount.get(s[i]) + 1);
        } else {
            charCount.set(s[i], 1);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (charCount.has(t[i]) && charCount.get(t[i]) > 0) {
            charCount.set(t[i], charCount.get(t[i]) - 1);
        } else {
            return false;
        }
    }
    return true

}

module.exports = isAnagram;
