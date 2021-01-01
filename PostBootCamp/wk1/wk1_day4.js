// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

function cleanString(s) {
	let sArr = s.split(""); 
  let res = []; 
  
  for(let i = 0; i < sArr.length; i++){
    res.push(sArr[i])
    if(sArr[i] == "#"){
      res.pop();
      res.pop(); 
    }
  }

  return res.join(""); 
};

//refactored code from codewars. Anonymous function with ternary
clean_string = s => s.split('').reduce((r, e) => e == '#' ? r.slice(0, -1) : r + e, '');

