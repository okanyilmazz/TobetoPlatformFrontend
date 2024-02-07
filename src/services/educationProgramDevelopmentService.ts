import { BaseService } from "../core/services/baseService";
import { Paginate } from "../models/paginate";
import AddEducationProgramDevelopmentRequest from "../models/requests/educationProgramDevelopment/addEducationProgramDevelopmentRequest";
import UpdateEducationProgramLevelRequest from "../models/requests/educationProgramLevel/updateEducationProgramLevelRequest";
import AddedEducationProgramDevelopmentResponse from "../models/responses/educationProgramDevelopment/addedEducationProgramDevelopmentResponse";
import GetEducationProgramDevelopmentResponse from "../models/responses/educationProgramDevelopment/getEducationProgramDevelopmentResponse";
import GetListEducationProgramDevelopmentResponse from "../models/responses/educationProgramDevelopment/getListEducationProgramDevelopmentResponse";
import { UpdatedEducationProgramLevelResponse } from "../models/responses/educationProgramLevel/updatedEducationProgramLevelResponse";


class EducationProgramDevelopmentService extends BaseService<
    Paginate<GetListEducationProgramDevelopmentResponse>,
    GetEducationProgramDevelopmentResponse,
    AddEducationProgramDevelopmentRequest,
    AddedEducationProgramDevelopmentResponse,
    UpdateEducationProgramLevelRequest,
    UpdatedEducationProgramLevelResponse
> {
    constructor() {
        super()
        this.apiUrl = "EducationProgramDevelopments/GetList?PageSize=10"
    }
}

export default new EducationProgramDevelopmentService();


