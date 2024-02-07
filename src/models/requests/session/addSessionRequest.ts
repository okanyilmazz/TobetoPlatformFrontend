import { Identifier } from '@babel/types';

export default interface AddSessionRequest {
    occupationClassId: Identifier ;
    startDate: Date;
    endDate: Date;
    recordPath: string;
}
