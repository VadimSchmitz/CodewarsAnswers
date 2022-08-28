//https://www.codewars.com/kata/5208f99aee097e6552000148/javascript

// complete the function
function solution(string) {
    return string.replace(/([A-Z])/g, ' $1').trim()
}
