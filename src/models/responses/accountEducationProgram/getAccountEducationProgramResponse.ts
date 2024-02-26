import { Identifier } from "typescript";

export default interface GetAccountEducationProgramResponse {
    id: Identifier;
    accountId: Identifier;
    educationProgramId: Identifier;
    statusPercent: number;
}