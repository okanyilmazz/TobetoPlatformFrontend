import { Identifier } from "typescript";

export default interface AddCertificateRequest {
    accountId: Identifier;
    name: string;
    description: string;
    folderPath: string;
}
