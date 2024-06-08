const getArray = () => {
    const numString = prompt("Enter grades separated by commas (e.g. 67, 45, 98):");
    const numArrayAsStrings = numString.split(",");
    const numArray = numArrayAsStrings.map(convertToNumber);
    return numArray;
};

const convertToNumber = (stringNumber) => parseInt(stringNumber.trim());


let input = getArray();

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
    let min = Math.min(...input);
    gradeAnalysis.lowest = min;
};

const passingScore = (input) => {
    if (avgScore(input) >= 60) {
        gradeAnalysis.passing = true;
    } else {
        gradeAnalysis.passing = false;
    }
};

const analyzeGrades = () => {
    totalPoints(input);
    avgScore(input);
    highestScore(input);
    lowestScore(input);
    passingScore(input);
    console.log(gradeAnalysis);
    document.getElementById("output").innerHTML = "";
    for (let item in gradeAnalysis) {
        document.getElementById("output").innerHTML +=
        "<p>" + item + ": " + gradeAnalysis[item] + "</p>"; 
    }
};

document.getElementById("btn").addEventListener("click", analyzeGrades);