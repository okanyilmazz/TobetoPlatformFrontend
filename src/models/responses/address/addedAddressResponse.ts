import { Identifier } from "typescript";

export default interface AddedAddressResponse {
    id: Identifier;
    cityId: Identifier;
    districtId: Identifier;
    countryId: Identifier;
    addressDetail: string;
}