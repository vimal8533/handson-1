var input = "abcadeecfb"










// ANSWER :1

function uniquechar(string){
    let Unique = new Set();
    let result = ""
    
    for(let char of string ){
        if(!Unique.has(char)){
            Unique.add(char)
            result += char
        }
    
    }
    return result
       
}
var  output = uniquechar(input)
console.log(output); 
// ANSWER :2

function countchar(string) {
    let CountMap = new Map();
  
    for (let word of string) {
      if (CountMap.has(word)) {
        CountMap.set(word, CountMap.get(word) + 1);
      } else {
    CountMap.set(word, 1);
      }
    }
  
    for (let [word, count] of CountMap) {
      console.log(`${word}=${count}`);
    }
  }
  
  countchar(input);
  