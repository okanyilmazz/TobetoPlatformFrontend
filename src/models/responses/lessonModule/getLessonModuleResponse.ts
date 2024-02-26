import { Identifier } from "typescript";

export default interface GetLessonModuleResponse {
    id: Identifier;
    lessonId: Identifier;
    moduleId: Identifier;
}