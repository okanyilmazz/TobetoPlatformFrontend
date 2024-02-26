import { Identifier } from "typescript";

export default interface AddedLessonModuleResponse {
    id: Identifier;
    lessonId: Identifier;
    moduleId: Identifier;
}