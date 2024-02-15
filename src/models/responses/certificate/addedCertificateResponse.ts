import { Identifier } from "typescript";

export default interface AddedCertificateResponse {
    id: Identifier;
    name: string;
    description: string;
    folderPath: string;

}
