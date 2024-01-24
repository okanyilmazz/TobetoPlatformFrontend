import { Paginate } from "../models/paginate";
import { GetListEducationProgramResponse } from "../models/responses/educationProgram/getListEducationProgramResponse";
import axios, { AxiosResponse } from "axios";

class EducationProgramService {
    getAll(): Promise<AxiosResponse<Paginate<GetListEducationProgramResponse>>> {
        return axios.get<Paginate<GetListEducationProgramResponse>>("http://localhost:50628/api/ProgrammingLanguages/GetList?PageIndex=0&PageSize=6");
    }
}


export default new EducationProgramService()