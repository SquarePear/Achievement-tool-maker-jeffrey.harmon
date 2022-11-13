import { cs222GradeCalculator } from './cs222GradeCalculator'
import {Grade} from './grade'

export default function getInput(calculator: cs222GradeCalculator) {
    getEngagementGrade(calculator)
    getAssignmentsGrade(calculator)
    getAchievementsGrade(calculator)
    getSelfAssessmentGrade(calculator)
    getProjectsGrade(calculator)
    getFinalExamGrade(calculator)
}

function getEngagementGrade(calculator: cs222GradeCalculator) {
    console.log('Engagement:')
    const daysMissed = parseInt(prompt('Enter days missed: '))

    const grade = calculator.calculateEngagementGrade(daysMissed);

    console.log(`Grade: ${Grade[grade]}`)
}

function getAssignmentsGrade(calculator: cs222GradeCalculator) {
    console.log('Assignments:')
    const assignments = parseInt(prompt('Enter the number of assignments you met specs for: '))

    const grade = calculator.calculateAssignmentsGrade(assignments);

    console.log(`Grade: ${Grade[grade]}`)
}

function getAchievementsGrade(calculator: cs222GradeCalculator) {
    console.log('Achievements:')
    const achievements = parseInt(prompt('Enter the number of achievements you earned: '))

    const grade = calculator.calculateAchievementsGrade(achievements);

    console.log(`Grade: ${Grade[grade]}`)
}

function getSelfAssessmentGrade(calculator: cs222GradeCalculator) {
    console.log('Self Assessment:')
    const completed = prompt('Did you complete the self assessment? (y/n)').toLowerCase() === 'y'

    const grade = calculator.calculateSelfAssessmentGrade(completed);

    console.log(`Grade: ${Grade[grade]}`)
}

function getProjectsGrade(calculator: cs222GradeCalculator) {
    console.log('Projects:')
    const finalIterationGrade = Grade[prompt('Enter the grade for the final iteration of your project: ')]
    const minIterationGrade = Grade[prompt('Enter the minimum grade for all other iterations of your project: ')]

    const grade = calculator.calculateProjectsGrade(finalIterationGrade, minIterationGrade);

    console.log(`Grade: ${Grade[grade]}`)
}

function getFinalExamGrade(calculator: cs222GradeCalculator) {
    console.log('Final Exam:')
    const finalExamGrade = Grade[prompt('Enter the grade for your final exam: ')]

    const grade = calculator.calculateFinalExamGrade(finalExamGrade);

    console.log(`Grade: ${Grade[grade]}`)
}
