import { Identifier } from "typescript";

export default interface UpdatedAddressResponse {
    id: Identifier;
    cityId: Identifier;
    districtId: Identifier;
    countryId: Identifier;
    addressDetail: string;
}