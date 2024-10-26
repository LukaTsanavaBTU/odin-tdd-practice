function analyzeArray(arr) {
    return {
        average: arr.reduce((sum, val) => sum + val, 0) / arr.length,
        max: Math.max(...arr),
        min: Math.min(...arr),
        length: arr.length
    }
};
    

export default analyzeArray;