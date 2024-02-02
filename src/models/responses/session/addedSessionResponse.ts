import { Identifier } from "typescript";

export default interface AddedSessionResponse {
    id: Identifier ;
    occupationClassId: Identifier ;
    startDate: Date;
    endDate: Date;
    recordPath: string;
}
