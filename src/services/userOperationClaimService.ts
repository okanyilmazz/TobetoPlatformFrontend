import { BaseService } from "../core/services/baseService";
import { Paginate } from "../models/paginate";
import AddUserOperationClaimRequest from "../models/requests/userOperationClaim/addUserOperationClaimRequest";
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
    UpdatedUserOperationClaimResponse

> {
    constructor() {
        super()
        this.apiUrl = "UserOperationClaim/GetList?PageIndex=0&PageSize=17"
    }
}

export default new UserOperationClaimService(); 