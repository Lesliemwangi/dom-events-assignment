// Debugging const submitButton = document.querySelector('#submit')
const submitButton = document.querySelector("#gradeForm");

// Debugging const studentGrader = document.querySelector("#student-grader");
const studentGrader = document.querySelector("#grade");

// Add an event listener to the submit button
submitButton.addEventListener("click", function () {
  console.log(studentGrader.value);
  // Get the input value from the studentGrader element
  const score = parseFloat(studentGrader.value);

  // Call the studentGrades function with the input score
  const grade = studentGrades(score);

  return grade;
});

function studentGrades(score) {
  const gradeOutput = document.querySelector("#grade-output");

  // declare an empty variable grade
  let grade = " ";
  // use if, else and else if as control structures
  if (score > 100 || score < 0) {
    grade = "Invalid input";
  } else if (score > 79) {
    gradeOutput.innerText = "Your score is A";
    gradeOutput.className = "grade-output-success";
  } else if (score >= 60 && score <= 79) {
    gradeOutput.innerText = "Your score is B";
    gradeOutput.className = "grade-output-success";
  } else if (score >= 49 && score <= 59) {
    gradeOutput.innerText = "Your score is C";
    gradeOutput.className = "grade-output-success";
  } else if (score >= 40 && score < 49) {
    gradeOutput.innerText = "Your score is D";
    gradeOutput.className = "grade-output-success";
  } else {
    gradeOutput.innerText = "Your score is E";
    gradeOutput.className = "grade-output-success";
  }

  return grade;
}
// const contactForm = document.querySelector("#grade-form");
