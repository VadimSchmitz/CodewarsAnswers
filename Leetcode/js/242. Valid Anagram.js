/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  a = {};
  b = {};

  for (let i = 0; i < s.length; i++) {
    if (a[s[i]] == undefined) {
      a[s[i]] = 0;
    }
    a[s[i]]++;

    if (b[t[i]] == undefined) {
      b[t[i]] = 0;
    }
    b[t[i]]++;
  }

  //compare a and b
  for (let i = 0; i < s.length; i++) {
    if (a[s[i]] !== b[s[i]]) return false;
  }
  return true;
};

s = "anagram";
t = "nagaram";
isAnagram(s, t);
