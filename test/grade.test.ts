import { Grade, GradeCalculator } from '../src/grade'
import { describe, it, expect } from 'bun:test'

describe('GradeCalculator', () => {
    it('should return a grade', () => {
        const gradeCalculator = new GradeCalculator(['test'])
        gradeCalculator.addGrade('test', Grade.A)
        expect(gradeCalculator.getGrade('test')).toBe(Grade.A)
    })

    it('should update a grade', () => {
        const gradeCalculator = new GradeCalculator(['test'])
        gradeCalculator.addGrade('test', Grade.A)
        expect(gradeCalculator.getGrade('test')).toBe(Grade.A)
        gradeCalculator.addGrade('test', Grade.B)
        expect(gradeCalculator.getGrade('test')).toBe(Grade.B)
    })

    it('should throw an error if the grade is invalid', () => {
        const gradeCalculator = new GradeCalculator(['test'])

        let error = null
        try {
            gradeCalculator.addGrade('test', 'invalid' as Grade)
        } catch (errorMsg) {
            error = errorMsg
        }
        
        expect(error).toBe('Grade is invalid')
    })

    it('should return F if no grade is set', () => {
        const gradeCalculator = new GradeCalculator(['test'])
        expect(gradeCalculator.getGrade('test')).toBe(Grade.F)
    })

    it('should throw an error if category does not exist on add', () => {
        const gradeCalculator = new GradeCalculator(['test'])

        let error = null
        try {
            gradeCalculator.addGrade('test2', Grade.A)
        } catch (errorMsg) {
            error = errorMsg
        }

        expect(error).toBe('Category does not exist')
    })

    it('should throw an error if category does not exist on get', () => {
        const gradeCalculator = new GradeCalculator(['test'])

        let error = null
        try {
            gradeCalculator.getGrade('test2')
        } catch (errorMsg) {
            error = errorMsg
        }

        expect(error).toBe('Category does not exist')
    })

    it('should return a final grade', () => {
        const gradeCalculator = new GradeCalculator(['test'])
        gradeCalculator.addGrade('test', Grade.A)
        expect(gradeCalculator.getFinalGrade()).toBe(Grade.A)
    })

    it('should return a final grade based on multiple categories', () => {
        const gradeCalculator = new GradeCalculator(['test', 'test2'])
        gradeCalculator.addGrade('test', Grade.A)
        gradeCalculator.addGrade('test2', Grade.B)
        expect(gradeCalculator.getFinalGrade()).toBe(Grade.B)
    })

    it('should return a final grade of F any category is not set', () => {
        const gradeCalculator = new GradeCalculator(['test', 'test2'])
        gradeCalculator.addGrade('test', Grade.A)
        expect(gradeCalculator.getFinalGrade()).toBe(Grade.F)
    })

    it('should return a final grade of F if all categories are F', () => {
        const gradeCalculator = new GradeCalculator(['test', 'test2'])
        gradeCalculator.addGrade('test', Grade.F)
        gradeCalculator.addGrade('test2', Grade.F)
        expect(gradeCalculator.getFinalGrade()).toBe(Grade.F)
    })

    it('should return a final grade of A if all categories are A', () => {
        const gradeCalculator = new GradeCalculator(['test', 'test2'])
        gradeCalculator.addGrade('test', Grade.A)
        gradeCalculator.addGrade('test2', Grade.A)
        expect(gradeCalculator.getFinalGrade()).toBe(Grade.A)
    })

    it('should update the final grade when a category is updated', () => {
        const gradeCalculator = new GradeCalculator(['test', 'test2'])
        gradeCalculator.addGrade('test', Grade.A)
        gradeCalculator.addGrade('test2', Grade.B)
        expect(gradeCalculator.getFinalGrade()).toBe(Grade.B)
        gradeCalculator.addGrade('test2', Grade.A)
        expect(gradeCalculator.getFinalGrade()).toBe(Grade.A)
    })


})
