function analyzeArray (array) {
    average = array.reduce((total, current) => total + current, 0) / array.length;
    min = Math.min(...array);
    max = Math.max(...array);
    len = array.length;
    return {
        "average": average,
        "min": min,
        "max": max,
        "length": len
    };
};

export {analyzeArray}