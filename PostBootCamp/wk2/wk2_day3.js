// Given a string s, find the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(s) {
    const dict = {}; 
    let count = 0;
    let maxCount = 0;
    let currStr = "";

    for(let i = 0; i < s.length; i++) {
        // if the new value was in my current string
        if (!dict[s[i]]){
            dict[s[i]] = i;
            count = count + 1; 
            // console.log(s[i], '1');
        } else {
            // for(let j=0; j < i; j++){
            //     delete dict[s[j]];
            // }
            // count= count - 1;
            // console.log(s[i], '2');
        }
        if(count > maxCount) {
            maxCount = count;
        }
    }

    return maxCount;
}
// string solve
function lengthOfLongestSubstring(s) {
    /*
    :type s: str
    :rtype: int
    */
    var max_length = 0;
    var curr_str = "";
    for (let i = 0; i < s.length; i++) {
        if (!curr_str.includes(s[i])) {
            curr_str += s[i];
        }
        else {
            curr_str = curr_str.slice(curr_str.indexOf(s[i]) + 1) + s[i];
        }
        if (curr_str.length > max_length) {max_length = curr_str.length};
    }
    return max_length
}

console.log("Result: " + lengthOfLongestSubstring("abcdabc") + " Expected: 4") // should log 4
console.log("Result: " + lengthOfLongestSubstring("pwwkaew") + " Expected: 4") // should log 4   wkpe
console.log("Result: " + lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyz") + " Expected: 26") // should log 26
console.log("Result: " + lengthOfLongestSubstring("abcdajkabc") + " Expected: 6") // should log 6