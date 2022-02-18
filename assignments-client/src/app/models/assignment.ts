import { AssignmentType } from "./assignmentType"

export class Assignment {
    id?: number
    name?: string
    description?: string
    assignmentTypeId?: number
    isRepeat?: boolean
    asignmentType?: AssignmentType
    constructor() {
        this.isRepeat = false;
    }
}