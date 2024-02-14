import { Paginate } from "../models/paginate";
import { BaseService } from "../core/services/baseService";

import GetCertificateResponse from "../models/responses/certificate/getCertificateResponse";
import GetListCertificateResponse from "../models/responses/certificate/getListCertificateResponse";
import AddedCertificateResponse from "../models/responses/certificate/addedCertificateResponse";
import UpdatedCertificateResponse from "../models/responses/certificate/updatedCertificateResponse";
import AddCertificateRequest from "../models/requests/certificate/addCertificateRequest";
import UpdateCertificateRequest from "../models/requests/certificate/updateCertificateRequest";


class CertificateService extends BaseService<
    Paginate<GetListCertificateResponse>,
    GetCertificateResponse,
    FormData,
    AddedCertificateResponse,
    UpdateCertificateRequest,
    UpdatedCertificateResponse
> {
    constructor() {
        super()
        this.apiUrl = "Certificates"
    }
}

export default new CertificateService();
