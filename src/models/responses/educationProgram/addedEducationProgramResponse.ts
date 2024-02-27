import { Identifier } from "typescript";

export interface AddedEducationProgramResponse {
    id: Identifier;
    educationProgramLevelId: Identifier
    educationProgramDevelopmentId: Identifier;
    badgeId: Identifier;
    name: string;
    description: string;
    thumbnailPath: string;
    duration: string;
    authorizedPerson: string;
    price: number;
    startDate: Date;
    deadline: Date;
}

