import { GradeCalculator } from "./grade"

// Get categories from command line
const categories = [
    'Engagement',
    'Assignments',
    'Achievements',
    'Self Assesment',
    'Projects',
    'Final Exam'
]

const grade = new GradeCalculator(categories)

// Get grades from command line
for (let category of categories) {
    let gradeInput = null

    while (gradeInput === null) {
        gradeInput = prompt(`Enter grade for ${category}: `).toLocaleUpperCase()

        try {
            grade.addGrade(category, gradeInput)
        } catch (error) {
            console.log(error)
            gradeInput = null
        }
    }
}

console.log(`Final grade: ${grade.getFinalGrade()}`)
