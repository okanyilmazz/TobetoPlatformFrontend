import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { Paginate } from "../models/paginate";
import GetListAccountLanguageResponse from "../models/responses/accountLanguage/getListAccountLanguageResponse";
import GetAccountLanguageResponse from "../models/responses/accountLanguage/getAccountLanguageResponse";
import AddAccountLanguageRequest from "../models/requests/accountLanguage/addAccountLanguageRequest";
import AddedAccountLanguageResponse from "../models/responses/accountLanguage/addedAccountLanguageResponse";
import UpdateAccountLanguageRequest from "../models/requests/accountLanguage/updateAccountLanguage";
import UpdatedAccountLanguageResponse from "../models/responses/accountLanguage/updatedAccountLanguageResponse";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import DeleteAccountLanguageRequest from "../models/requests/accountLanguage/deleteAccountLanguageRequest";


class AccountLanguageService extends BaseService<
    Paginate<GetListAccountLanguageResponse>,
    GetAccountLanguageResponse,
    AddAccountLanguageRequest,
    AddedAccountLanguageResponse,
    UpdateAccountLanguageRequest,
    UpdatedAccountLanguageResponse

> {
    constructor() {
        super()
        this.apiUrl = "AccountLanguages"
    }

    getByAccountLanguageId(id: number): Promise<AxiosResponse<GetListAccountLanguageResponse, any>> {
        return axiosInstance.get<GetListAccountLanguageResponse>(this.apiUrl + "/GetById?id=" + id)
    }

    /* deleteByAccountIdAndEducationProgramId(request: DeleteAccountLanguageRequest): any {
        return axiosInstance.post(this.apiUrl + "/AccountLanguages", request);
    } */
}

export default new AccountLanguageService();


