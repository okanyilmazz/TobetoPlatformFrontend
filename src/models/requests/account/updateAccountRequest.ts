import { Identifier } from 'typescript';
export default interface UpdateAccountRequest {
    id: Identifier;
    addressId: Identifier;
    userId: Identifier;
    phoneNumber: string;
    nationalId: string;
    description: string;
    birthDate: Date;
    profilePhotoPath: string;
}

