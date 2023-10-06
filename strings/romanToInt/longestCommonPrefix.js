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
// we could double for loop brute force this but thats whack
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// set the first work equal to a var to make comparisons 
// loop starting from second word
// indexOf returns -1 if the word is not in the next word when making a comparison, else returns 0
// basically loop over flower until we get flow
// now we do something to the word to shorten it, and then keep goin