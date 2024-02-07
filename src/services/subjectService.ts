import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { Paginate } from "../models/paginate";
import AddSubjectRequest from "../models/requests/subject/addSubjectRequest";
import UpdateSubjectRequest from "../models/requests/subject/updateSubjectRequest";
import AddedSubjectResponse from "../models/responses/subject/addedSubjectResponse";
import GetListSubjectResponse from "../models/responses/subject/getListSubjectResponse";
import GetSubjectResponse from "../models/responses/subject/getSubjectResponse";
import UpdatedSubjectResponse from "../models/responses/subject/updatedSubjectResponse";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class SubjectService extends BaseService<
    Paginate<GetListSubjectResponse>,
    GetSubjectResponse,
    AddSubjectRequest,
    AddedSubjectResponse,
    UpdateSubjectRequest,
    UpdatedSubjectResponse
>{

    constructor() {
        super()
        this.apiUrl = "Subjects";
    }

    customGetAll(pageIndex: number, pageSize: number): Promise<AxiosResponse<Paginate<GetListSubjectResponse>, any>> {
        this.apiUrl = "Subjects/GetList?PageIndex=" + pageIndex + "&PageSize=" + pageSize
        return this.getAll();
    }

    getAll(): Promise<AxiosResponse<Paginate<GetListSubjectResponse>, any>> {
        return axiosInstance.get<Paginate<GetListSubjectResponse>>(this.apiUrl);
    }
}

export default new SubjectService();