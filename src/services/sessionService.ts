import { BaseService } from "../core/services/baseService";
import AddSessionRequest from "../models/requests/session/addSessionRequest";
import DeleteSessionRequest from "../models/requests/session/deleteSessionRequest";
import UpdateSessionRequest from "../models/requests/session/updateSessionRequest";
import AddedSessionResponse from "../models/responses/session/addedSessionResponse";
import GetListSessionResponse from "../models/responses/session/getListSessionResponse";
import GetSessionResponse from "../models/responses/session/getSessionResponse";
import UpdatedSessionResponse from "../models/responses/session/updatedSessionResponse";
import { Paginate } from './../models/paginate';

class SessionService extends BaseService<
    Paginate<GetListSessionResponse>,
    GetSessionResponse,
    AddSessionRequest,
    AddedSessionResponse,
    UpdateSessionRequest,
    UpdatedSessionResponse,
    DeleteSessionRequest
> {
    constructor() {
        super()
        this.apiUrl = "Sessions"
    }
}

export default new SessionService(); 