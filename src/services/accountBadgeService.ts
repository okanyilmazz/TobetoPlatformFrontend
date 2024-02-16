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

class AccountBadgeService extends BaseService<
  Paginate<GetListAccountBadgeResponse>,
  GetAccountBadgeResponse,
  AddAccountBadgeRequest,
  AddedAccountBadgeResponse,
  UpdateAccountBadgeRequest,
  UpdatedAccountBadgeResponse
> {
  constructor() {
    super();
    this.apiUrl = "AccountBadges";
  }

  getByAccountId(
    accountId: number
  ): Promise<AxiosResponse<Paginate<GetListAccountBadgeResponse>, any>> {
    return axiosInstance.get<Paginate<GetListAccountBadgeResponse>>(
      this.apiUrl + "/GetByAccountId?id=" + accountId
    );
  }

  // getByAccountId(
  //   accountId: number,
  //   pageIndex: number,
  //   pageSize: number
  // ): Promise<AxiosResponse<Paginate<GetListAccountBadgeResponse>, any>> {
  //   console.log(accountId);
  //   return axiosInstance.get<Paginate<GetListAccountBadgeResponse>>(
  //     this.apiUrl +
  //       "/GetByAccountId?accountId=" +
  //       accountId +
  //       "&PageIndex=" +
  //       pageIndex +
  //       "&PageSize=" +
  //       pageSize
  //   );
  // }
}

export default new AccountBadgeService();
