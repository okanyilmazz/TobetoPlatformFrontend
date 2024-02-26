import { Identifier } from "typescript";

export default interface AddLessonModuleRequest {
    lessonId: Identifier;
    moduleId: Identifier;
}