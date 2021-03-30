/**
 * 
 * @param {string} s1 
 * @param {string} s2 
 */
const matchStringChars = (s1, s2) => {
    const size = Math.max(s1.length, s2.length)
    let matchCount = 0;
    const s1Lower = s1.toLowerCase()
    const s2Lower = s2.toLowerCase()
    for (let i = 0; i < Math.min(s2.length, s1.length) ; i++) {
        if (s1Lower[i] === s2Lower[i]) matchCount++;
    }
    return matchCount / size;
}

/**
 * 
 * @param {string} s1 
 * @param {string} s2 
 */
const matchStrings = (s1, s2) => {
    let start = 0;
    let end = 1;
    let substr = ''
    let s = ''
    while (end <= s2.length) {
        if (s1.indexOf(s2.substring(start, end)) > 0) {
            s = s2.substring(start, end);
            end += 1
        }
        else {
            substr += s;
            s = "";
            start = end;
            end += 1;
        }
    }
    substr += s;
    
    let score = 0;
    if (s1[0] == s2[0]) score += 0.1;
    if (s1[s1.length - 1] == s2[s2.length - 1]) score += 0.1;
    if (s1.length == s2.length) score += (0.1);
    score += ((substr.length / ((s1.length + s2.length) / 2)) * 0.8) * matchStringChars(s1, s2);
    return score;
}

/**
 * Compare two strings to get their similarity in numbers between 0 and 1
 * @param {string} s1 
 * @param {string} s2 
 */
export const compare = (s1, s2) => {
    if ([s1, s2].includes("")) return 1;
    if (s1?.toLowerCase() === s2?.toLowerCase()) return 1;
    let start = 0;
    let end = start + s2.length;
    let maxval = 0;
    while (end <= s1.length) {
        var sub = s1.substring(start, end);
        maxval = Math.max(matchStrings(sub.toLowerCase(), s2.toLowerCase()), maxval);
        start++;
        end++;
    }
    return Math.min(maxval, 1) || 0;
}

export default compare;