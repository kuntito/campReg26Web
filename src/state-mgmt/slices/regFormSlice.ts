import { StateCreator } from "zustand";
import { yc26DataSource } from "../../apiClient/yc26DataSource";
import { BranchApi, FellowshipApi, GenderApi, UnitApi } from "../../apiClient/getRegDropdowns/getRegDropdowns.types";


export interface RegDropdownOptions {
    branches: BranchApi[];
    fellowships: FellowshipApi[];
    units: UnitApi[];
    genders: GenderApi[];
}


export type RegDropdownsState =
    | { kind: 'idle' }
    | { kind: 'fetching' }
    | { 
        kind: 'success',
        dropdownOptions: RegDropdownOptions
    }
    | { kind: 'error' }

export interface RegFormSlice {
    regDropdownsState: RegDropdownsState;
    fetchRegDropdowns: () => Promise<void>;
}

export const createRegFormSlice: StateCreator<RegFormSlice> = (
    set, 
    get
) => {
    const defaultRegDropdownsState: RegDropdownsState = { kind: 'idle' };

    const fetchRegDropdowns = async () => {
        set({ regDropdownsState: { kind: 'fetching'} });

        const res = await yc26DataSource.getRegDropdowns();

        if (res == null || !res.success) {
            set({
                regDropdownsState: { kind: 'error' }
            });
            return;
        }

        set({
            regDropdownsState: {
                kind: 'success',
                dropdownOptions: {
                    branches: res.branches,
                    fellowships: res.fellowships,
                    units: res.units,
                    genders: res.genders,
                }
            }
        });
    }


    return {
        regDropdownsState: defaultRegDropdownsState,
        fetchRegDropdowns,
    };
};