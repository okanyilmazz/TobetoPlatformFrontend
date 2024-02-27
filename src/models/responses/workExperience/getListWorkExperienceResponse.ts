import { Identifier } from "typescript";

export default interface GetListWorkExperienceResponse {
    Id: Identifier;
    cityId: Identifier;
    accountId: Identifier;
    industry: string;
    companyName: string;
    department: string;
    description: string;
    startDate: Date;
    endDate: Date;
}