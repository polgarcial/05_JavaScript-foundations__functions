/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * 
 * @param {string} sentence 
 * @returns {number}
 */

const getTotalWordsFromString = function(sentence) {
    return (sentence.match(/\w+/g) || []).length;
};

export default getTotalWordsFromString;
