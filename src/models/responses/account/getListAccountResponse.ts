import { Identifier } from 'typescript';

export default interface GetListAccountResponse {
    id: Identifier;
    cityName: string;
    districtName: string;
    countryName: string;
    userName: string;
    phoneNumber: string;
    nationalId: string;
    description: string;
    birthDate: Date;
    profilePhotoPath: string;
    email: string;

}