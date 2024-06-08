input = [65, 88, 34, 100, 98, 97, 89, 43, 70, 77, 90]

let gradeAnalysis = {};

const totalPoints = (input) => {
    let total = 0;
    for (let num of input) {
        total += num;
    }
    gradeAnalysis.total = total;
    return total;
};

const avgScore = (input) => {
    let average = totalPoints(input)/ input.length;
    gradeAnalysis.average = Number(average.toFixed(2));
    return average;
};

const highestScore = (input) => {
    let max = Math.max(...input);
    gradeAnalysis.highest = max;
};

const lowestScore = (input) => {
    let min = Math.min(input);
    gradeAnalysis.lowest = min;
};

const passingScore = (input) => {
    if (avgScore(input) >= 60) {
        gradeAnalysis.passing = true;
    } else {
        gradeAnalysis.passing = false;
    }
};

totalPoints(input);
avgScore(input);
highestScore(input);
lowestScore(input);
passingScore(input);
console.log(gradeAnalysis);