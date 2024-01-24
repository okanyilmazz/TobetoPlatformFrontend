import axios, { AxiosResponse } from "axios";

import { Paginate } from "../models/paginate";
import GetListProgrammingLanguageResponse from "../models/responses/programmingLanguage/getListProgrammingLanguageResponse";

export default class ProgrammingLanguageService {
    getAll(): Promise<AxiosResponse<Paginate<GetListProgrammingLanguageResponse>>> {
        return axios.get<Paginate<GetListProgrammingLanguageResponse>>("http://localhost:50628/api/ProgrammingLanguages/GetList?PageIndex=0&PageSize=6");
    }
}