import { Identifier } from 'typescript';
export default interface UpdateAccountRequest {
    id: Identifier;
    userId: Identifier;
    phoneNumber: string;
    nationalId: string;
    description: string;
    birthDate: Date;
    profilePhotoPath: string;
    email: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    district: string;
    addressDetail: string;
}