export enum Grade {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    F = 'F'
}

export class GradeCalculator {
    Categories: String[]
    CategoryGrade: Grade[]

    constructor(categories: String[]) {
        this.Categories = categories
        this.CategoryGrade = Array(categories.length).fill(Grade.F)
    }

    addGrade(category: String, grade: Grade) {
        const index = this.Categories.indexOf(category)

        if (index === -1)
            throw 'Category does not exist'

        if (Grade[grade] === undefined)
            throw 'Grade is invalid'

        this.CategoryGrade[index] = grade
    }

    getGrade(category: String): Grade {
        const index = this.Categories.indexOf(category)

        if (index === -1)
            throw 'Category does not exist'

        return this.CategoryGrade[index]
    }

    getFinalGrade(): Grade {
        const Grades: Grade[] = Object.values(Grade).reverse().map(key => Grade[key])

        for (let grade in Grades) {
            grade = Grades[grade]
            if (this.CategoryGrade.includes(Grade[grade]))
                return Grade[grade]
        }

        return Grade.F
    }

}
