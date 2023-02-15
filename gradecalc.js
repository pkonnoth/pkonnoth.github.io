// Get the form element and add a submit event listener
const form = document.getElementById('grade-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the input values from the form
  const majorInput = document.getElementById('major-grades');
  const minorInput = document.getElementById('minor-grades');
  const practiceInput = document.getElementById('practice-grades');

  // Split the input strings into lists of grades
  const majorGrades = majorInput.value.split(',').map(Number);
  const minorGrades = minorInput.value.split(',').map(Number);
  const practiceGrades = practiceInput.value.split(',').map(Number);

  // Compute the average of the grades within each category
  const minorAverage = calculateAverage(minorGrades);
  const majorAverage = calculateAverage(majorGrades);
  const practiceAverage = calculateAverage(practiceGrades);

  // Compute the weighted average of the three category averages
  const average = (0.35 * minorAverage) + (0.55 * majorAverage) + (0.1 * practiceAverage);

  // Display the result in the result element and style it based on the grade
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Your average grade is: ${average.toFixed(2)}`;

  if (average < 75) {
    resultElement.style.backgroundColor = 'red';
  } else if (average < 85) {
    resultElement.style.backgroundColor = 'orange';
  } else {
    resultElement.style.backgroundColor = 'green';
  }
});

// Helper function to compute the average of a list of grades
function calculateAverage(grades) {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((total, grade) => total + grade);
  return sum / grades.length;
}
