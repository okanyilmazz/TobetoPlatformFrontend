import React from 'react'
import { Identifier } from 'typescript';

export default interface UpdatedCertificateResponse {
    id: Identifier;
    name: string;
    description: string;
    folderPath: string;

}
