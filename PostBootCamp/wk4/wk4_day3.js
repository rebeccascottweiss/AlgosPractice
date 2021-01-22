//https://www.codewars.com/kata/55c45be3b2079eccff00010f

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""



function order(words){
    let wordOrder = {}; 
    let tempWord = "";
    let tempNum;
    let i;

    for (i = 0; i < words.length; i++) {
        if (!isNaN(parseInt(words[i]))) {
            tempNum = parseInt(words[i], 10);
            tempWord = tempWord.concat(words[i]);
        } else if (words[i] == " ") {
            wordOrder[tempNum] = tempWord;
            tempWord = "";
        } else {
            tempWord = tempWord.concat(words[i]);
        }
    }
    wordOrder[tempNum] = tempWord;

    var size = Object.keys(wordOrder).length;
    let result = ""; 
    for(i = 1; i <= size; i++){
      if (!wordOrder[i]){

      } else {
        result += wordOrder[i]+" ";
      }
    }

    //find the blank space, store the previous number: word pair into a dictionary
    //at the end, retrieve and concatenate the words in order

    return result.trim();
  }

console.log(order("is2 Thi1s T4est 3a")) //returns "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")) //returns "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")) //returns ""

