import { Paginate } from "../models/paginate";
import GetListAnnouncementProjectResponse from "../models/responses/announcementProject/getListAnnouncementProjectResponse";
import axios, { AxiosResponse } from "axios";

class AnnouncementProjectService {
    getAll(): Promise<AxiosResponse<Paginate<GetListAnnouncementProjectResponse>>> {
        return axios.get<Paginate<GetListAnnouncementProjectResponse>>("http://localhost:50628/api/AnnouncementProjects/GetList?PageIndex=0&PageSize=6");
    }
}


export default new AnnouncementProjectService()