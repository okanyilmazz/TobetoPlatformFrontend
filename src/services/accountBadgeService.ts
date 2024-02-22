import { Paginate } from "../models/paginate";
import { BaseService } from "../core/services/baseService";
import GetListAccountBadgeResponse from "../models/responses/accountBadge/getListAccountBadgeResponse";
import GetAccountBadgeResponse from "../models/responses/accountBadge/getAccountBadgeResponse";
import AddAccountBadgeRequest from "../models/requests/accountBadge/addAccountBadgeRequest";
import AddedAccountBadgeResponse from "../models/responses/accountBadge/addedAccountBadgeResponse";
import UpdateAccountBadgeRequest from "../models/requests/accountBadge/updateAccountBadgeRequest";
import UpdatedAccountBadgeResponse from "../models/responses/accountBadge/updatedAccountBadgeResponse";
import { AxiosResponse } from "axios";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import DeleteAccountBadgeRequest from "../models/requests/accountBadge/deleteAccountBadgeRequest";

class AccountBadgeService extends BaseService<
  Paginate<GetListAccountBadgeResponse>,
  GetAccountBadgeResponse,
  AddAccountBadgeRequest,
  AddedAccountBadgeResponse,
  UpdateAccountBadgeRequest,
  UpdatedAccountBadgeResponse,
  DeleteAccountBadgeRequest
> {
  constructor() {
    super();
    this.apiUrl = "AccountBadges";
  }

  getByAccountId(accountId: number): Promise<AxiosResponse<Paginate<GetListAccountBadgeResponse>, any>> {
    return axiosInstance.get<Paginate<GetListAccountBadgeResponse>>(this.apiUrl + "/GetByAccountId?id=" + accountId);
  }
}

export default new AccountBadgeService();
