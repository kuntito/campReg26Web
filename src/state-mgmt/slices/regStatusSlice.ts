import { StateCreator } from "zustand";
import { RegCountPerBranch } from "../../apiClient/getRegStatus/getRegStatus.types";
import { yc26DataSource } from "../../apiClient/yc26DataSource";

export type RegStatus =
    | { kind: 'idle' }
    | { kind: 'fetching' }
    | { kind: 'success', regCountPerBranch: RegCountPerBranch }
    | { kind: 'error', reason: string }

export interface RegStatusSlice {
    stateRegStatus: RegStatus;
    fetchRegStatus: () => Promise<void>;
    resetStateRegStatus: () => void;
}

export const createRegStatusSlice: StateCreator<RegStatusSlice> = (set, get) => {
    const defaultStatus: RegStatus = { kind: 'idle' };

    const fetchRegStatus = async () => {
        set({ stateRegStatus: { kind: 'fetching' } });

        const res = await yc26DataSource.getRegStatus();

        if (res == null || !res.success) {
            set({
                stateRegStatus: {
                    kind: 'error',
                    reason: "wahala, retry"
                }
            });
            return;
        }

        set({
            stateRegStatus: {
                kind: 'success',
                regCountPerBranch: res.branchCounts
            }
        });
    };

    const resetStateRegStatus = () => {
        set({ stateRegStatus: { kind: 'idle' } });
    };

    return {
        stateRegStatus: defaultStatus,
        fetchRegStatus,
        resetStateRegStatus,
    };
};