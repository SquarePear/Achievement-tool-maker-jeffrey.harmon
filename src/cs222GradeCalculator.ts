import { Grade, GradeCalculator } from "./grade";

export enum Categories {
    Engagement = "Engagement",
    Assignments = "Assignments",
    Achievements = "Achievements",
    SelfAssesment = "Self Assesment",
    Projects = "Projects",
    FinalExam = "Final Exam"
}

export class cs222GradeCalculator extends GradeCalculator {
    constructor() {
        super(Object.values(Categories));
    }

    calculateEngagementGrade(daysMissed: number): Grade {
        let grade = Grade.A;

        if (daysMissed > 16)
            grade = Grade.F;
        else if (daysMissed > 13)
            grade = Grade.D;
        else if (daysMissed > 10)
            grade = Grade.C;
        else if (daysMissed > 7)
            grade = Grade.B;

        this.addGrade(Categories.Engagement, grade);
        
        return grade;
    }

    calculateAssignmentsGrade(numAssignments: number): Grade {
        let grade = Grade.A;

        if (numAssignments < 4)
            grade = Grade.F;
        else if (numAssignments < 5)
            grade = Grade.D;
        else if (numAssignments < 6)
            grade = Grade.C;
        else if (numAssignments < 7)
            grade = Grade.B;

        this.addGrade(Categories.Assignments, grade);
        
        return grade;
    }

    calculateAchievementsGrade(numAchievements: number): Grade {
        let grade = Grade.A;

        if (numAchievements < 1)
            grade = Grade.F;
        else if (numAchievements < 3)
            grade = Grade.D;
        else if (numAchievements < 5)
            grade = Grade.C;
        else if (numAchievements < 6)
            grade = Grade.B;

        this.addGrade(Categories.Achievements, grade);
        
        return grade;
    }

    calculateSelfAssessmentGrade(completed: boolean): Grade {
        const grade = (completed) ? Grade.A : Grade.F;
        
        this.addGrade(Categories.SelfAssesment, grade);

        return grade;
    }

    calculateProjectsGrade(finalProjectGrade: Grade, minimumProjectGrade: Grade): Grade {
        let grade = finalProjectGrade;

        if (minimumProjectGrade == Grade.F && finalProjectGrade == Grade.A)
            grade = Grade.B;

        this.addGrade(Categories.Projects, grade);

        return grade;
    }

    calculateFinalExamGrade(finalExamGrade: Grade): Grade {
        this.addGrade(Categories.FinalExam, finalExamGrade);

        this.addGrade(Categories.FinalExam, finalExamGrade);

        return finalExamGrade;
    }
}
