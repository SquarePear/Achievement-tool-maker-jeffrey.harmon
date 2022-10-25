import { Grade, GradeCalculator } from '../src/grade'
import { describe, it, expect } from 'bun:test'

describe('GradeCalculator', () => {
    it('should return a grade', () => {
        const grade = new GradeCalculator(['test'])
        grade.addGrade('test', Grade.A)
        expect(grade.getGrade('test')).toBe(Grade.A)
    })

    it('should update a grade', () => {
        const grade = new GradeCalculator(['test'])
        grade.addGrade('test', Grade.A)
        expect(grade.getGrade('test')).toBe(Grade.A)
        grade.addGrade('test', Grade.B)
        expect(grade.getGrade('test')).toBe(Grade.B)
    })

    it('should throw an error if the grade is invalid', () => {
        const grade = new GradeCalculator(['test'])

        let error = null
        try {
            grade.addGrade('test', 'invalid' as Grade)
        } catch (errorMsg) {
            error = errorMsg
        }
        
        expect(error).toBe('Grade is invalid')
    })

    it('should return F if no grade is set', () => {
        const grade = new GradeCalculator(['test'])
        expect(grade.getGrade('test')).toBe(Grade.F)
    })

    it('should throw an error if category does not exist on add', () => {
        const grade = new GradeCalculator(['test'])

        let error = null
        try {
            grade.addGrade('test2', Grade.A)
        } catch (errorMsg) {
            error = errorMsg
        }

        expect(error).toBe('Category does not exist')
    })

    it('should throw an error if category does not exist on get', () => {
        const grade = new GradeCalculator(['test'])

        let error = null
        try {
            grade.getGrade('test2')
        } catch (errorMsg) {
            error = errorMsg
        }

        expect(error).toBe('Category does not exist')
    })

    it('should return a final grade', () => {
        const grade = new GradeCalculator(['test'])
        grade.addGrade('test', Grade.A)
        expect(grade.getFinalGrade()).toBe(Grade.A)
    })

    it('should return a final grade based on multiple categories', () => {
        const grade = new GradeCalculator(['test', 'test2'])
        grade.addGrade('test', Grade.A)
        grade.addGrade('test2', Grade.B)
        expect(grade.getFinalGrade()).toBe(Grade.B)
    })

    it('should return a final grade of F any category is not set', () => {
        const grade = new GradeCalculator(['test', 'test2'])
        grade.addGrade('test', Grade.A)
        expect(grade.getFinalGrade()).toBe(Grade.F)
    })

    it('should return a final grade of F if all categories are F', () => {
        const grade = new GradeCalculator(['test', 'test2'])
        grade.addGrade('test', Grade.F)
        grade.addGrade('test2', Grade.F)
        expect(grade.getFinalGrade()).toBe(Grade.F)
    })

    it('should return a final grade of A if all categories are A', () => {
        const grade = new GradeCalculator(['test', 'test2'])
        grade.addGrade('test', Grade.A)
        grade.addGrade('test2', Grade.A)
        expect(grade.getFinalGrade()).toBe(Grade.A)
    })

    it('should update the final grade when a category is updated', () => {
        const grade = new GradeCalculator(['test', 'test2'])
        grade.addGrade('test', Grade.A)
        grade.addGrade('test2', Grade.B)
        expect(grade.getFinalGrade()).toBe(Grade.B)
        grade.addGrade('test2', Grade.A)
        expect(grade.getFinalGrade()).toBe(Grade.A)
    })


})
