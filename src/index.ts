import { GradeCalculator } from "./grade"
import getInput from "./gradeInput"

const categories = [
    'Engagement',
    'Assignments',
    'Achievements',
    'Self Assesment',
    'Projects',
    'Final Exam'
]

const gradeCalculator = new GradeCalculator(categories)

getInput(gradeCalculator)

console.log(`Final grade: ${gradeCalculator.getFinalGrade()}`)
