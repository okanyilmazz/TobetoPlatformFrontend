import { Identifier } from "typescript";

export default interface UpdateAddressRequest {
    id: Identifier;
    cityId: Identifier;
    districtId: Identifier;
    countryId: Identifier;
    addressDetail: string;
}