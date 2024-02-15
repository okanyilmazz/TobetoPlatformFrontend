import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService"
import { Paginate } from "../models/paginate";
import AddUserRequest from "../models/requests/user/addUserRequest";
import UpdateUserRequest from "../models/requests/user/updateUserRequest";
import AddedUserResponse from "../models/responses/user/addedUserResponse";
import GetListUserResponse from "../models/responses/user/getListUserResponse";
import GetUserResponse from "../models/responses/user/getUserResponse";
import UpdatedUserResponse from "../models/responses/user/updatedUserResponse";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class UserService extends BaseService<
    Paginate<GetListUserResponse>,
    GetUserResponse,
    AddUserRequest,
    AddedUserResponse,
    UpdateUserRequest,
    UpdatedUserResponse
>{
    constructor() {
        super();
        this.apiUrl = "Users"
    }

    getInstructorList(): Promise<AxiosResponse<Paginate<GetListUserResponse>, any>> {
        return axiosInstance.get<Paginate<GetListUserResponse>>(this.apiUrl + "/GetListInstructor?PageSize=50");
    }

}

export default new UserService();