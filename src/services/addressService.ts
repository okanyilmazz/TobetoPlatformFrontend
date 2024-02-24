import { Paginate } from "../models/paginate";
import { BaseService } from "../core/services/baseService";
import GetListAddressResponse from "../models/responses/address/getListAddressResponse";
import GetAddressResponse from "../models/responses/address/getAddressResponse";
import AddAddressRequest from "../models/requests/address/addAddressRequest";
import AddedAddressResponse from "../models/responses/address/addedAddressResponse";
import UpdateAddressRequest from "../models/requests/address/updateAddressRequest";
import UpdatedAddressResponse from "../models/responses/address/updatedAddressResponse";
import DeleteAddressRequest from "../models/requests/address/deleteAddressRequest";

class AddressService extends BaseService<
    Paginate<GetListAddressResponse>,
    GetAddressResponse,
    AddAddressRequest,
    AddedAddressResponse,
    UpdateAddressRequest,
    UpdatedAddressResponse,
    DeleteAddressRequest
> {
    constructor() {
        super()
        this.apiUrl = "Addresses"
    }
}

export default new AddressService();
