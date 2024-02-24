import { Identifier } from "typescript";

export default interface AddAddressRequest {
    cityId: Identifier;
    countryId: Identifier;
    districtId: Identifier;
    addressDetail: string;
}