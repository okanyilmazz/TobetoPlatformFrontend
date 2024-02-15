import { Identifier } from "typescript";

export default interface UpdatedSessionResponse {
    id: Identifier ;
    occupationClassId: Identifier ;
    startDate: Date;
    endDate: Date;
    recordPath: string;
}
