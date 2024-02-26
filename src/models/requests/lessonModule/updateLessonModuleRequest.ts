import { Identifier } from "typescript";

export default interface UpdateLessonModuleRequest {
    id: Identifier;
    lessonId: Identifier;
    moduleId: Identifier;
}
import { Identifier } from "typescript";

export default interface UpdateLessonModuleRequest {
    id: Identifier;
    name: string;
}