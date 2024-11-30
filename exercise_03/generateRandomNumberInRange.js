/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

const generateRandomNumberInRange = function(limit) {
    return Math.round(Math.random() * limit);
};

export default generateRandomNumberInRange;
