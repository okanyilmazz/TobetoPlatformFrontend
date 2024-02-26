import { Identifier } from "typescript";

export default interface GetListAccountEducationProgramResponse {
    id: Identifier;
    accountId: Identifier;
    educationProgramId: Identifier;
    statusPercent: number;
}