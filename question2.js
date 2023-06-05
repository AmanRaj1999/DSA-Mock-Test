// First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:
// a. 1 <= s.length <= 10^5
// b. s consists of only lowercase English letters.

function firstUniqueChar(s) {
  const charCount = new Map();

  // Count the occurrences of each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount.get(char) === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqueChar("leetcode")); // Output: 0
console.log(firstUniqueChar("ineuron")); // Output: 0
console.log(firstUniqueChar("aabb")); // Output: -1
console.log(firstUniqueChar("loveleetcode")); //Output: 2
console.log(firstUniqueChar("iloveineuron")); //Output: 1

// TC: O(n)
// SC: O(1)
