import React from 'react'
import { Identifier } from 'typescript';

export default interface GetListCertificateResponse {
    id: Identifier;
    name: string;
    description: string;
    folderPath: string;

}
