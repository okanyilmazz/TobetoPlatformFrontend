import { Paginate } from "../models/paginate";
import { BaseService } from "../core/services/baseService";
import GetListMediaNewResponse from "../models/responses/mediaNew/getListMediaNewResponse";
import GetMediaNewResponse from "../models/responses/mediaNew/getMediaNewResponse";
import AddMediaNewRequest from "../models/requests/mediaNew/addMediaNewRequest";
import AddedMediaNewResponse from "../models/responses/mediaNew/addedMediaNewResponse";
import UpdatedMediaNewRequest from "../models/requests/mediaNew/updateMediaNewReques";
import UpdatedMediaNewResponse from "../models/responses/mediaNew/updatedMediaNewResponse";

class MediaNewService extends BaseService<
  Paginate<GetListMediaNewResponse>,
  GetMediaNewResponse,
  AddMediaNewRequest,
  AddedMediaNewResponse,
  UpdatedMediaNewRequest,
  UpdatedMediaNewResponse
> {
  constructor() {
    super();
    this.apiUrl = "MediaNews/GetList?PageSize=3";
  }
}

export default new MediaNewService();