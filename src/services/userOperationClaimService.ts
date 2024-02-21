import { BaseService } from "../core/services/baseService";
import { Paginate } from "../models/paginate";
import AddUserOperationClaimRequest from "../models/requests/userOperationClaim/addUserOperationClaimRequest";
import DeleteUserOperationClaimRequest from "../models/requests/userOperationClaim/deleteUserOperationClaimRequest";
import UpdateUserOperationClaimRequest from "../models/requests/userOperationClaim/updateUserOperationClaimRequest";
import AddedUserOperationClaimResponse from "../models/responses/userOperationClaim/addedUserOperationClaimResponse";
import GetListUserOperationClaimResponse from "../models/responses/userOperationClaim/getListUserOperationClaimResponse";
import GetUserOperationClaimResponse from "../models/responses/userOperationClaim/getUserOperationClaimResponse";
import UpdatedUserOperationClaimResponse from "../models/responses/userOperationClaim/updatedUserOperationClaimResponse";

class UserOperationClaimService extends BaseService<
    Paginate<GetListUserOperationClaimResponse>,
    GetUserOperationClaimResponse,
    AddUserOperationClaimRequest,
    AddedUserOperationClaimResponse,
    UpdateUserOperationClaimRequest,
    UpdatedUserOperationClaimResponse,
    DeleteUserOperationClaimRequest
> {
    constructor() {
        super()
        this.apiUrl = "UserOperationClaims"
    }
}

export default new UserOperationClaimService(); 