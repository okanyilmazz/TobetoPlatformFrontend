import { Paginate } from './../models/paginate';
import { BaseService } from "../core/services/baseService";
import AddOccupationRequest from "../models/requests/occupation/addOccupationRequest";
import UpdateOccupationRequest from "../models/requests/occupation/updateOccupationRequest";
import AddedOccupationResponse from "../models/responses/occupation/addedOccupationResponse";
import GetListOccupation from "../models/responses/occupation/getListOccupationResponse";
import GetOccupation from "../models/responses/occupation/getOccupationResponse";
import UpdatedOccupationResponse from "../models/responses/occupation/updatedOccupationResponse";
import { AxiosResponse } from 'axios';
import GetListOccupationResponse from '../models/responses/occupation/getListOccupationResponse';
import axiosInstance from '../core/interceptors/axiosInterceptor';

class OccupationService extends BaseService<
    Paginate<GetListOccupation>,
    GetOccupation,
    AddOccupationRequest,
    AddedOccupationResponse,
    UpdateOccupationRequest,
    UpdatedOccupationResponse>{

    constructor() {
        super();
        this.apiUrl = "Occupations"
    }


    customGetAll(pageIndex: number, pageSize: number): Promise<AxiosResponse<Paginate<GetListOccupationResponse>, any>> {
        this.apiUrl = this.apiUrl + "/GetList?PageIndex=" + pageIndex + "&PageSize=" + pageSize
        return this.getAll();
    }

    getAll(): Promise<AxiosResponse<Paginate<GetListOccupationResponse>, any>> {
        return axiosInstance.get<Paginate<GetListOccupationResponse>>(this.apiUrl);
    }
}

export default new OccupationService();