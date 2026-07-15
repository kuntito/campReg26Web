import { BranchApi, GenderApi } from "./getRegDropdowns.types";

export interface LodgeOptionApi {
    lodgeOptionId: number;
    lodgeOptionText: string;
}

interface GetCoordDropdownsSuccess {
    success: true;
    genders: GenderApi[];
    branches: BranchApi[];
    lodgeOptions: LodgeOptionApi[];
}

interface GetCoordDropdownsFailure {
    success: false;
    debug: object;
}

export type GetCoordDropdownsResponse = 
    GetCoordDropdownsSuccess | GetCoordDropdownsFailure;