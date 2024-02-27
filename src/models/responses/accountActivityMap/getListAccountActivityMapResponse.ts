import { Identifier } from "typescript";

export default interface GetListAccountActivityMapResponse {
    id: Identifier;
    accountName: string;
    date: string;
    activityCount: number;
}
