import axios, { AxiosResponse } from "axios";
import { ProgrammingLanguage } from "../models/programmingLanguage";
import { Paginate } from "../models/paginate";

export default class ProgrammingLanguageService {
    getAll(): Promise<AxiosResponse<Paginate<ProgrammingLanguage>>> {
        return axios.get<Paginate<ProgrammingLanguage>>("http://localhost:50628/api/ProgrammingLanguages/GetList?PageIndex=0&PageSize=6");
    }
}