//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word){
    let newword = ""
    word = word.toLowerCase().split("")
    let dupes = word.filter((item, index) => index !== word.indexOf(item));

    word.forEach(element => {
        dupes.includes(element) ? newword += ")" : newword+="("
    });

    return newword
}

console.log(duplicateEncode("testtt"));