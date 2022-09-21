//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url) {
  return url.replace(/.+\/\/|www.|\..+/g, "");
}

let url1 = "http://github.com/carbonfive/raygun"; //github
let url2 = "http://www.zombie-bites.com"; //zombie-bites
let url3 = "https://www.cnet.com"; // cnet
domainName(url1);
domainName(url2);
domainName(url3);

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
