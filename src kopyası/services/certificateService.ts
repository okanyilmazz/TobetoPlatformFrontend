import { Paginate } from "../models/paginate";
import { BaseService } from "../core/services/baseService";

<<<<<<< HEAD
import GetListCertificateResponse from "../models/responses/certificate/getListCertificateResponse";
import AddCertificateRequest from "../models/requests/certificate/addCertificateRequest";
import UpdateCertificateRequest from "../models/requests/certificate/updateCertificateRequest";
import UpdatedCertificateResponse from "../models/responses/certificate/updatedCertificateResponse";
import GetCertificateResponse from "../models/responses/certificate/getCertificateResponse";
import AddedCertificateRequest from "../models/responses/certificate/addedCertificateResponse";
import AddedCertificateResponse from "../models/responses/certificate/addedCertificateResponse";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { AxiosResponse } from "axios";
=======
import GetCertificateResponse from "../models/responses/certificate/getCertificateResponse";
import GetListCertificateResponse from "../models/responses/certificate/getListCertificateResponse";
import AddedCertificateResponse from "../models/responses/certificate/addedCertificateResponse";
import UpdatedCertificateResponse from "../models/responses/certificate/updatedCertificateResponse";
import AddCertificateRequest from "../models/requests/certificate/addCertificateRequest";
import UpdateCertificateRequest from "../models/requests/certificate/updateCertificateRequest";

>>>>>>> master

class CertificateService extends BaseService<
    Paginate<GetListCertificateResponse>,
    GetCertificateResponse,
<<<<<<< HEAD
    AddCertificateRequest,
=======
    FormData,
>>>>>>> master
    AddedCertificateResponse,
    UpdateCertificateRequest,
    UpdatedCertificateResponse
> {
    constructor() {
        super()
        this.apiUrl = "Certificates"
    }
<<<<<<< HEAD
    getByAccountId(accountId: number, pageIndex: number, pageSize: number): Promise<AxiosResponse<Paginate<GetListCertificateResponse>, any>> {
        console.log(accountId)
        return axiosInstance.get<Paginate<GetListCertificateResponse>>(this.apiUrl + "/GetByAccountId?accountId=" + accountId + "&PageIndex=" + pageIndex + "&PageSize=" + pageSize);
    }
=======
>>>>>>> master
}

export default new CertificateService();
