import { Identifier } from "typescript";

export default interface UpdateSessionRequest {
    id: Identifier;
    occupationClassId: Identifier;
    startDate: Date;
    endDate: Date;
    recordPath: string;
}
