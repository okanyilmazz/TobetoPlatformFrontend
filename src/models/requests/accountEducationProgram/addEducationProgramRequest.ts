import { Identifier } from "typescript";

export default interface AddAccountEducationProgramRequest {
    accountId: Identifier;
    educationProgramId: string;
    statusPercent: number;
}