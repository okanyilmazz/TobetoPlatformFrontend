import axios, { AxiosResponse } from "axios";
import { Country } from "../models/country";
import { Paginate } from "../models/paginate";

export default class CountryService {
    getAll(): Promise<AxiosResponse<Paginate<Country>>> {
        return axios.get<Paginate<Country>>("http://localhost:5257/api/Countries/GetList?PageIndex=0&PageSize=90");
    }
}