/**
 * Given some integer `num`, find its next multiple of `multiplier`.
 *
 * ASSUME: Both values are integers.
 *
 *
 * @param {number} num
 * @param {number} multiplier
 * @returns {number}
 */
function getNextMultOf(multiplier, num) {
  return Math.ceil(num / multiplier) * multiplier;
}

function round(grade) {
  const newGrade = getNextMultOf(5, grade);

  return (newGrade - grade < 3)
    ? newGrade
    : grade;
}

function gradeStudents(grades) {
  const newGrades = [];

  for (let i = 0; i < grades.length; ++i) {
  // for (let i = 1, grade = grades[i]; i < grades.length; ++i) {
    const grade = grades[i];

    newGrades.push(grade < 38 ? grade : round(grade));
  }

  return newGrades;
}

export { round, gradeStudents };

