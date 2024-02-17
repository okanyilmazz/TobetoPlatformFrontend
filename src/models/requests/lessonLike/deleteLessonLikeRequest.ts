import { Identifier } from "typescript";

export default interface DeleteLessonLikeRequest {
    id: string;
    accountId: string;
    lessonId: string;
}