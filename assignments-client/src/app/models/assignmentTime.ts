import { Assignment } from "./assignment"

export class AssignmentTime {
    id?: number
    assignmentId?: number
    startDate?: Date
    endDate?: Date
    isFinished: boolean
    assignment?: Assignment
    constructor() { this.isFinished = false }
}