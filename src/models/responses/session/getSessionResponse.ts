import { Identifier } from "typescript";

export default interface GetSessionResponse {
    id: Identifier;
    accountName: string;
    occupationClassName: string;
    lessonName: string;
    startDate: Date;
    endDate: Date;
    recordPath: string;
}