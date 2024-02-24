import { Identifier } from "typescript";

export default interface GetListAddressResponse {
    id: Identifier;
    cityId: Identifier;
    districtId: Identifier;
    countryId: Identifier;
    addressDetail: string;
}