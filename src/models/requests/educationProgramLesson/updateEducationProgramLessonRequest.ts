import { Identifier } from "typescript";

export default interface UpdateEducationProgramLessonRequest {
    id: Identifier;
    lessonId: Identifier;
    educationId: Identifier;
}