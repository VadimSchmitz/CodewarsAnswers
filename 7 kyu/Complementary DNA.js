//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna) {
  let pairs = { A: "T", T: "A", C: "G", G: "C" };
  // /./g to apply for the entire word
  return dna.replace(/./g, (c) => pairs[c]);
}

a = "ATTGC"; // --> "TAACG"
b = "GTAT"; //--> "CATA"

console.log(DNAStrand(a));
DNAStrand(b);
