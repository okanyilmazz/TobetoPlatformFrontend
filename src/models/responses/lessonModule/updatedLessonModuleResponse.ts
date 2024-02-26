import { Identifier } from "typescript";

export default interface UpdatedLessonModuleResponse {
    id: Identifier;
    lessonId: Identifier;
    moduleId: Identifier;
}