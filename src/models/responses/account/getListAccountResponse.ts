import { Identifier } from 'typescript';

export default interface GetListAccountResponse {
    id: Identifier;
    cityId: Identifier;
    districtId: Identifier;
    countryId: Identifier;
    addressId: Identifier;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    nationalId: string;
    description: string;
    birthDate: Date;
    profilePhotoPath: string;
    email: string;
    addressDetail: string
}