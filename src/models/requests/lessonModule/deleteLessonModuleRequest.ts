import { Identifier } from "typescript";

export default interface DeleteLessonModuleRequest {
    id: Identifier;
    lessonId: Identifier;
    moduleId: Identifier;
}