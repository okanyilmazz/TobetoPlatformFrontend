import { Identifier } from "typescript";

export default interface GetListHomeworkResponse {
    id: Identifier;
    lessonName: string;
    name: string;
    description: string;
    deadline: Date;
}