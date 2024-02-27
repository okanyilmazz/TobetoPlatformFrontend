import { Identifier } from "typescript";

export default interface GetListSessionResponse {
    id: Identifier;
    accountName: string;
    occupationClassName: string;
    lessonName: string;
    startDate: Date;
    endDate: Date;
    recordPath: string;
}
