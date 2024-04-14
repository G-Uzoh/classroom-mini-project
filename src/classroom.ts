export function getNumberOfGrades(grades: number[]) {
    return grades.length;
}

export function getSumGrades(grades: number[]) {
    return grades.reduce((acc, grade) => acc + grade, 0);
}

export function getAverageValue(grades: number[]) {
    return getSumGrades(grades) / getNumberOfGrades(grades);
}

export function getPassingGrades(grades: number[]) {
    return grades.filter(grade => grade >= 10).length;
}


export function getFailingGrades(grades: number[]) {
    return grades.filter(grade => grade < 10).length;
}

export function getRaisedGrades(grades: number[]) {
    return grades.map(grade => grade < 20 ? grade + 1 : grade).join(", ");
}