import { StateCreator } from "zustand";
import { yc26DataSource } from "../../apiClient/yc26DataSource";
import { BranchApi, CountryCodeApi, FellowshipApi, GenderApi, UnitApi } from "../../apiClient/getRegDropdowns/getRegDropdowns.types";


export interface CampersRegDropdownOptions {
    branches: BranchApi[];
    fellowships: FellowshipApi[];
    units: UnitApi[];
    genders: GenderApi[];
    countryCodes: CountryCodeApi[];
}


export type CampersRegDropdownsState =
    | { kind: 'idle' }
    | { kind: 'fetching' }
    | { 
        kind: 'success',
        dropdownOptions: CampersRegDropdownOptions
    }
    | { kind: 'error' }

export interface CampersRegFormSlice {
    campersRegDropdownsState: CampersRegDropdownsState;
    fetchRegDropdowns: () => Promise<void>;
}

export const createCamperRegFormSlice: StateCreator<CampersRegFormSlice> = (
    set, 
    get
) => {
    const defaultRegDropdownsState: CampersRegDropdownsState = { kind: 'idle' };

    const fetchRegDropdowns = async () => {
        set({ campersRegDropdownsState: { kind: 'fetching'} });

        const res = await yc26DataSource.getRegDropdowns();

        if (res == null || !res.success) {
            set({
                campersRegDropdownsState: { kind: 'error' }
            });
            return;
        }

        set({
            campersRegDropdownsState: {
                kind: 'success',
                dropdownOptions: {
                    branches: res.branches,
                    fellowships: res.fellowships,
                    units: res.units,
                    genders: res.genders,
                    countryCodes: res.countryCodes
                }
            }
        });
    }


    return {
        campersRegDropdownsState: defaultRegDropdownsState,
        fetchRegDropdowns,
    };
};