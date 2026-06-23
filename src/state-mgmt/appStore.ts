import { create } from "zustand";
import { BranchApi, FellowshipApi, UnitApi } from "../apiClient/getRegDropdowns/getRegDropdowns.types";
import { yc26DataSource } from "../apiClient/yc26DataSource";


export type SexOption = "male" | "female";
export interface RegDropdownOptions {
    branches: BranchApi[];
    fellowships: FellowshipApi[];
    units: UnitApi[];
    sex: SexOption[];
}


export type RegDropdownsState =
    | { kind: 'idle' }
    | { kind: 'fetching' }
    | { 
        kind: 'success',
        dropdownOptions: RegDropdownOptions
    }
    | { kind: 'error' }


interface appStore {
    regDropdownsState: RegDropdownsState;
    fetchRegDropdowns: () => Promise<void>;
}


const useAppStore = create<appStore>((set) => {
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
                    sex: ["male", "female"],
                }
            }
        });
    }


    return {
        regDropdownsState: { kind: 'idle' },
        fetchRegDropdowns: fetchRegDropdowns,
    }
})

export default useAppStore;