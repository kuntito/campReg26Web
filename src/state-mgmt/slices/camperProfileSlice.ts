import { StateCreator } from "zustand";
import { CamperProfile } from "../../apiClient/getCamperProfile/getCamperProfile.types";
import { yc26DataSource } from "../../apiClient/yc26DataSource";

export type CamperProfileStatus =
    | { kind: 'idle' }
    | { kind: 'fetching' }
    | { kind: 'success', profile: CamperProfile }
    | { kind: 'error', reason: string }

    
export interface CamperProfileSlice {
    stateFetchCamperProfile: CamperProfileStatus;
    fetchCamperProfile: (camperEmail: string) => Promise<void>;
    resetStateCamperProfile: () => void;
}

export const createCamperProfileSlice: StateCreator<CamperProfileSlice> = (set, get) => {
    const defaultStatus: CamperProfileStatus = { kind: 'idle' };

    const fetchCamperProfile = async (camperEmail: string) => {
        set({ 
            stateFetchCamperProfile: { 
                kind: 'fetching' 
            } 
        });

        const res = await yc26DataSource.getCamperProfile(camperEmail);

        if (res == null || !res.success) {
            set({
                stateFetchCamperProfile: {
                    kind: 'error',
                    reason: res?.clientMessage ?? "wahala, try again"
                }
            });
            return;
        }

        set({
            stateFetchCamperProfile: {
                kind: 'success',
                profile: res.profile
            }
        });
    };

    const resetStateCamperProfile = () => {
        set({
            stateFetchCamperProfile: { 
                kind: 'idle'
            }
        });
    };

    return {
        stateFetchCamperProfile: defaultStatus,
        fetchCamperProfile,
        resetStateCamperProfile,
    };
};