import { Grade } from '../src/grade'
import { cs222GradeCalculator } from '../src/cs222GradeCalculator'
import { describe, it, expect } from 'bun:test'

describe('cs222GradeCalculator', () => {
    // Engagement
    it('should return an A if no days are missed', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateEngagementGrade(0)).toBe(Grade.A)
    })

    it('should return an A if 7 days are missed', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateEngagementGrade(7)).toBe(Grade.A)
    })

    it('should return a B if 8 days are missed', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateEngagementGrade(8)).toBe(Grade.B)
    })

    it('should return a B if 10 days are missed', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateEngagementGrade(10)).toBe(Grade.B)
    })

    it('should return a C if 11 days are missed', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateEngagementGrade(11)).toBe(Grade.C)
    })

    it('should return a C if 13 days are missed', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateEngagementGrade(13)).toBe(Grade.C)
    })

    it('should return a D if 14 days are missed', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateEngagementGrade(14)).toBe(Grade.D)
    })

    it('should return a D if 16 days are missed', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateEngagementGrade(16)).toBe(Grade.D)
    })

    it('should return an F if 17 days are missed', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateEngagementGrade(17)).toBe(Grade.F)
    })

    it('should return an F if 20 days are missed', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateEngagementGrade(20)).toBe(Grade.F)
    })

    it('should return an F if 45 days are missed', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateEngagementGrade(45)).toBe(Grade.F)
    })

    // Assignments
    it('should return an A if 7 of assignments meet specs', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateAssignmentsGrade(7)).toBe(Grade.A)
    })

    it('should return a B if 6 of assignments meet specs', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateAssignmentsGrade(6)).toBe(Grade.B)
    })

    it('should return a C if 5 of assignments meet specs', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateAssignmentsGrade(5)).toBe(Grade.C)
    })

    it('should return a D if 4 of assignments meet specs', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateAssignmentsGrade(4)).toBe(Grade.D)
    })

    it('should return an F if 3 of assignments meet specs', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateAssignmentsGrade(3)).toBe(Grade.F)
    })

    it('should return an F if 0 of assignments meet specs', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateAssignmentsGrade(0)).toBe(Grade.F)
    })

    // Achievements
    it('should return an A if 6 achievements meet specs', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateAchievementsGrade(6)).toBe(Grade.A)
    })

    it('should return a B if 5 achievements meet specs', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateAchievementsGrade(5)).toBe(Grade.B)
    })

    it('should return a C if 4 achievements meet specs', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateAchievementsGrade(4)).toBe(Grade.C)
    })

    it('should return a C if 3 achievements meet specs', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateAchievementsGrade(3)).toBe(Grade.C)
    })

    it('should return a D if 2 achievements meet specs', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateAchievementsGrade(1)).toBe(Grade.D)
    })

    it('should return an D if 1 achievement meet specs', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateAchievementsGrade(1)).toBe(Grade.D)
    })

    it('should return an F if 0 achievements meet specs', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateAchievementsGrade(0)).toBe(Grade.F)
    })

    // Self Assessment
    it('should return an A if self assessment is completed', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateSelfAssessmentGrade(true)).toBe(Grade.A)
    })

    it('should return an F if self assessment is not completed', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateSelfAssessmentGrade(false)).toBe(Grade.F)
    })

    // Projects
    it('should return an A if final project iteration 3 recieved an A and the minimum grade for all other iterations is a D', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateProjectsGrade(Grade.A, Grade.D)).toBe(Grade.A)
    })

    it('should return a B if final project iteration 3 recieved a A and the minimum grade for all other iterations is a F', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateProjectsGrade(Grade.A, Grade.F)).toBe(Grade.B)
    })

    it('should return a B if final project iteration 3 recieved a B', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateProjectsGrade(Grade.B, Grade.F)).toBe(Grade.B)
    })

    it('should return a C if final project iteration 3 recieved a C', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateProjectsGrade(Grade.C, Grade.F)).toBe(Grade.C)
    })

    it('should return a D if final project iteration 3 recieved a D', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateProjectsGrade(Grade.D, Grade.F)).toBe(Grade.D)
    })

    it('should return an F if final project iteration 3 recieved a F', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateProjectsGrade(Grade.F, Grade.F)).toBe(Grade.F)
    })

    // Final Exam
    it('should return an A if final exam is an A', () => {
        const gradeCalculator = new cs222GradeCalculator()
        expect(gradeCalculator.calculateFinalExamGrade(Grade.A)).toBe(Grade.A)
    })
})
