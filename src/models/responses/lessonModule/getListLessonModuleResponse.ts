import { Identifier } from "typescript";

export default interface GetListLessonModuleResponse {
    id: Identifier;
    lessonId: Identifier;
    moduleId: Identifier;
}