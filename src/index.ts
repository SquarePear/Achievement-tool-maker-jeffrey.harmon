import { cs222GradeCalculator } from "./cs222GradeCalculator"
import getInput from "./gradeInput"

const gradeCalculator = new cs222GradeCalculator()

getInput(gradeCalculator)

console.log(`Final grade: ${gradeCalculator.getFinalGrade()}`)
