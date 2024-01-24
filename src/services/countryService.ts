import axios, { AxiosResponse } from "axios";
import { Paginate } from "../models/paginate";
import { GetListCountryResponse } from "../models/responses/country/getListCountryResponse";

export default class CountryService {
    getAll(): Promise<AxiosResponse<Paginate<GetListCountryResponse>>> {
        return axios.get<Paginate<GetListCountryResponse>>("http://localhost:50628/api/Countries/GetList?PageIndex=0&PageSize=6");
    }
}