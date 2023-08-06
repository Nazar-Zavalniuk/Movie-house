export function calculateRating(grades = [], numberOfVoters = 0) {
  const totalGrade = grades.reduce((acc, val) => acc + val, 0);

  return Number((totalGrade / numberOfVoters).toFixed(2));
}
