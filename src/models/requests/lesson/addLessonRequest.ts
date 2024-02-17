import { Identifier } from "typescript";

export default interface AddLessonRequest {
    languageId: Identifier;
    lessonModuleId: Identifier;
    lessonCategoryId: Identifier;
    lessonSubTypeId: Identifier;
    productionCompanyId: Identifier;
    name: string;
    startDate: Date;
    endDate: Date;
    duration: number;
}