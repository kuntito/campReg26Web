import { StateCreator } from "zustand";
import { RegCountPerBranch } from "../../apiClient/getRegStatus/getRegStatus.types";
import { yc26DataSource } from "../../apiClient/yc26DataSource";

export type CamperRegStatus =
    | { kind: 'idle' }
    | { kind: 'fetching' }
    | { kind: 'success', regCountPerBranch: RegCountPerBranch }
    | { kind: 'error', reason: string }

export interface CamperRegStatusSlice {
    stateCamperRegStatus: CamperRegStatus;
    fetchCamperRegStatus: () => Promise<void>;
    resetStateCamperRegStatus: () => void;
}

export const createCamperRegStatusSlice: StateCreator<CamperRegStatusSlice> = (set, get) => {
    const defaultStatus: CamperRegStatus = { kind: 'idle' };

    const fetchRegStatus = async () => {
        set({ stateCamperRegStatus: { kind: 'fetching' } });

        const res = await yc26DataSource.getRegStatus();

        if (res == null || !res.success) {
            set({
                stateCamperRegStatus: {
                    kind: 'error',
                    reason: "wahala, retry"
                }
            });
            return;
        }

        set({
            stateCamperRegStatus: {
                kind: 'success',
                regCountPerBranch: res.branchCounts
            }
        });
    };

    const resetStateRegStatus = () => {
        set({ stateCamperRegStatus: { kind: 'idle' } });
    };

    return {
        stateCamperRegStatus: defaultStatus,
        fetchCamperRegStatus: fetchRegStatus,
        resetStateCamperRegStatus: resetStateRegStatus,
    };
};