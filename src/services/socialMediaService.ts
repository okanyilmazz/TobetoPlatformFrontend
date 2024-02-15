import { BaseService } from "../core/services/baseService";
import { Paginate } from "../models/paginate";
import AddSocialMediaRequest from "../models/requests/socialMedia/addSocialMediaRequest";
import UpdateSocialMediaRequest from "../models/requests/socialMedia/updateSocialMediaRequest";
import AddedSocialMediaResponse from "../models/responses/socialMedia/addedSocialMediaResponse";
import GetListSocialMediaResponse from "../models/responses/socialMedia/getListSocialMediaResponse";
import GetSocialMediaResponse from "../models/responses/socialMedia/getSocialMediaResponse";
import UpdatedSocialMediaResponse from "../models/responses/socialMedia/updatedSocialMediaResponse";

class SocialMediaService extends BaseService<
    Paginate<GetListSocialMediaResponse>,
    GetSocialMediaResponse,
    AddSocialMediaRequest,
    AddedSocialMediaResponse,
    UpdateSocialMediaRequest,
    UpdatedSocialMediaResponse
> {
    constructor() {
        super();
        this.apiUrl = "SocialMedias";
    }
}

export default new SocialMediaService();
