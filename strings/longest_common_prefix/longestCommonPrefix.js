// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


var longestCommonPrefix = function(strings){
    let prefix = strings[0] // this var equals the first word in the array sow e can make comparisons
    for(let i = 1; i<strings.length; i++){
        while(strings[i].indexOf(prefix)!== 0){
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix
}

var longCommPref = function(strs){
    let prefix = strs[0];
    for(let i = 1; i< strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){// if they dont match itll return -1
        prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix
}
console.log(longCommPref(strs = ["flower","flow","flight"]))

// indexOf takes in a parameter to search through
var commonPrefix = function(strs){
    let prefix = strs[0];
    for(let i = 1; i<strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0) {// because it returns -1 if it doesnt match
        prefix = prefix.substring(0,prefix.length - 1)
        }
    }
    return prefix
}
console.log(commonPrefix(strs = ["flower","flow","flight"]))
// we could double for loop brute force this but thats whack
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// set the first word equal to a var to make comparisons 
// loop starting from second word
// indexOf returns -1 if the word is not in the next word when making a comparison, else returns 0
// basically loop over flower until we get flow
// now we do something to the word to shorten it, and then keep goin
// built in method substring is used to cut
// The substring() method extracts characters from start to end (exclusive).