import { StateCreator } from "zustand";
import { LodgeOptionApi } from "../../apiClient/getRegDropdowns/getCoordinatorsDropdowns.types";
import { BranchApi, GenderApi } from "../../apiClient/getRegDropdowns/getRegDropdowns.types";
import { yc26DataSource } from "../../apiClient/yc26DataSource";

export interface CoordRegDropdownOptions {
    branches: BranchApi[];
    genders: GenderApi[];
    lodgeOptions: LodgeOptionApi[];
}

export type CoordRegDropdownsState = 
    | { kind: 'idle' }
    | { kind: 'fetching' }
    | { 
        kind: 'success',
        dropdownOptions: CoordRegDropdownOptions
    }
    | { kind: 'error' }


export interface CoordRegFormSlice {
    coordRegDropdownsState: CoordRegDropdownsState;
    fetchCoordRegDropdowns: () => Promise<void>;
}

export const createCoordRegFormSlice: StateCreator<CoordRegFormSlice> = (
    set,
    get
) => {
    const defaultCoordRegDropdownsState: CoordRegDropdownsState = { kind: 'idle' };

    const fetchCoordRegDropdowns = async () => {
        set({ coordRegDropdownsState: { kind: 'fetching' } });

        const res = await yc26DataSource.getCoordRegDropdowns();

        if (res == null || !res.success) {
            set({
                coordRegDropdownsState: { kind: 'error' }
            });
            return;
        }

        set({
            coordRegDropdownsState: {
                kind: 'success',
                dropdownOptions: {
                    branches: res.branches,
                    genders: res.genders,
                    lodgeOptions: res.lodgeOptions,
                }
            }
        });
    };

    return {
        coordRegDropdownsState: defaultCoordRegDropdownsState,
        fetchCoordRegDropdowns,
    };
}