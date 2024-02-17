import { Paginate } from "../models/paginate";
import { BaseService } from "../core/services/baseService";
import GetListExamResponse from "../models/responses/exam/getListExamResponse";
import { AxiosResponse } from "axios";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import GetListLessonResponse from "../models/responses/lesson/getListLessonResponse";
import UpdatedLessonResponse from "../models/responses/lesson/updatedLessonResponse";
import UpdateLessonRequest from "../models/requests/lesson/updateLessonRequest";
import AddedLessonResponse from "../models/responses/lesson/addedLessonResponse";
import AddLessonRequest from "../models/requests/lesson/addLessonRequest";
import GetLessonResponse from "../models/responses/lesson/getLessonResponse";

class LessonService extends BaseService<
    Paginate<GetListLessonResponse>,
    GetLessonResponse,
    AddLessonRequest,
    AddedLessonResponse,
    UpdateLessonRequest,
    UpdatedLessonResponse
> {
    constructor() {
        super();
        this.apiUrl = "Lessons";
    }

    getByEducationId(educationId: string): Promise<AxiosResponse<Paginate<GetListLessonResponse>, any>> {
        return axiosInstance.get<Paginate<GetListLessonResponse>>(this.apiUrl + "/GetByEducationProgramId?id=" + educationId);
    }
}

export default new LessonService();
