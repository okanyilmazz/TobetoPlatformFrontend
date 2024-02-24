import { Identifier } from "typescript";

export default interface GetAddressResponse {
    id: Identifier;
    cityId: Identifier;
    districtId: Identifier;
    countryId: Identifier;
    addressDetail: string;
}