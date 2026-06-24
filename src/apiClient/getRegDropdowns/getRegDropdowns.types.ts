export interface BranchApi {
    branchId: number;
    branchName: string;
}

export interface FellowshipApi {
    fellowshipId: number;
    fellowshipName: string;
}

export interface UnitApi {
    unitId: number;
    unitName: string;
}

export interface GenderApi {
    genderId: number;
    genderName: string;
}

interface GetRegDropdownsSuccess {
    success: true;
    genders: GenderApi[];
    branches: BranchApi[];
    fellowships: FellowshipApi[];
    units: UnitApi[];
}

interface GetRegDropdownsFailure {
    success: false;
    debug: object;
}

export type GetRegDropdownsResponse = GetRegDropdownsSuccess | GetRegDropdownsFailure;