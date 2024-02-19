import { Identifier } from "typescript";

export default interface DeleteEducationProgramLikeRequest {
    id: string;
    accountId: Identifier;
    educationProgramId: string;
}

