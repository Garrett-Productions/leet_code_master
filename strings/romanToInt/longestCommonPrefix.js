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