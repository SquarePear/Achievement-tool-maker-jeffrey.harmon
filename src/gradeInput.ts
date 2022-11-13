import {Grade, GradeCalculator} from './grade'

export default function getInput(gradeCalculator: GradeCalculator) {
    for (let category of gradeCalculator.Categories) {
        let success = false
    
        while (!success) {
            let gradeInput = prompt(`Enter grade for ${category}: `).toLocaleUpperCase()
    
            try {
                gradeCalculator.addGrade(category, Grade[gradeInput])
    
                success = true
            } catch (error) {
                console.log(error)
            }
        }
    }
}
