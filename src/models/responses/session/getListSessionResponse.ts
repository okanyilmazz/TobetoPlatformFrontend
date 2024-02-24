import { Identifier } from "typescript";

export default interface GetListSessionResponse {
    id: Identifier ;
    accountId: Identifier ;
    occupationClassName: string ;
    accountName: string ;
    startDate: Date;
    endDate: Date;
    recordPath: string;
    userFirstName: string;
    userLastName: string;
    userId: Identifier;
}
