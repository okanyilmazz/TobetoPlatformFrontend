import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { Paginate } from "../models/paginate";
import AddAccountRequest from "../models/requests/account/addAccountRequest";
import UpdateAccountRequest from "../models/requests/account/updateAccountRequest";
import AddedAccountResponse from "../models/responses/account/addedAccountResponse";
import GetAccountResponse from "../models/responses/account/getAccountResponse";
import GetListAccountResponse from "../models/responses/account/getListAccountResponse";
import UpdatedAccountResponse from "../models/responses/account/updatedAccountResponse";
import axiosInstance from "../core/interceptors/axiosInterceptor";


class AccountService extends BaseService<
    Paginate<GetListAccountResponse>,
    GetAccountResponse,
    AddAccountRequest,
    AddedAccountResponse,
    UpdateAccountRequest,
    UpdatedAccountResponse

> {
    constructor() {
        super()
        this.apiUrl = "Accounts"
    }

    getByAccountId(id: number): Promise<AxiosResponse<GetListAccountResponse, any>> {
        return axiosInstance.get<GetListAccountResponse>(this.apiUrl + "/GetById?id=" + id)
    }

    getByLessonIdForLike(lessonId: string, pageIndex: number, pageSize: number): Promise<AxiosResponse<Paginate<GetListAccountResponse>, any>> {
        return axiosInstance.get<Paginate<GetListAccountResponse>>(this.apiUrl + "/GetByLessonIdForLike?lessonId=" + lessonId + "&PageIndex=" + pageIndex + "&PageSize=" + pageSize)
    }
}

export default new AccountService();


