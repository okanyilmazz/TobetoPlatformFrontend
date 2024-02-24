import { Identifier } from "typescript";

export default interface AddAddressRequest {
    cityId: Identifier;
    districtId: Identifier;
    countryId: Identifier;
    addressDetail: string;
}