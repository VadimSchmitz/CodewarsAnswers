//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number){
    if(number < 0) return 0

    let a = []
    let b = []  
    for (let i = 0; i < number; i+=3) {
        a.push(i)
    }
    for (let i = 0; i < number; i+=5) {
        b.push(i)
    }

    let c = a.concat(b.filter((item) => a.indexOf(item) < 0))
    
    return c.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
}


solution(23)

// var a = [1, 2, 3], b = [101, 2, 1, 10]
// var c = a.concat(b.filter((item) => a.indexOf(item) < 0))

// console.log(c) // c is [1, 2, 3, 101, 10]