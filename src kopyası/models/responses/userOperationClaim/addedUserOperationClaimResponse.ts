import { Identifier } from "typescript";

export default interface AddedUserOperationClaimResponse {
    userId : Identifier;
    operationClaimId : Identifier;
}