import { Identifier } from "typescript";

export default interface DeleteEducationProgramLessonRequest {
    id: Identifier;
    lessonId: Identifier;
    educationId: Identifier;
}