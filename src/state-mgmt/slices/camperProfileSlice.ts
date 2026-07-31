import { StateCreator } from "zustand";
import { CamperProfile, CoordinatorProfile } from "../../apiClient/getCamperProfile/getCamperProfile.types";
import { yc26DataSource } from "../../apiClient/yc26DataSource";

export type CamperProfileStatus =
    | { kind: 'idle' }
    | { kind: 'fetching' }
    | { 
        kind: 'success', 
        type: 'camper',
        profile: CamperProfile 
    }
    | { 
        kind: 'success', 
        type: 'coordinator',
        profile: CoordinatorProfile,
    }
    | { kind: 'error', reason: string }

    
export interface CamperProfileSlice {
    stateFetchCamperProfile: CamperProfileStatus;
    fetchCamperProfile: (camperEmail: string) => Promise<void>;
    resetStateCamperProfile: () => void;
    markPhoneNumberRegistered: () => void;
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

        if (res.type === 'camper') {
            set({
                stateFetchCamperProfile: {
                    kind: 'success',
                    type: 'camper',
                    profile: res.profile
                }
            });
        } else {
            set({
                stateFetchCamperProfile: {
                    kind: 'success',
                    type: 'coordinator',
                    profile: res.details,
                }
            });
        }
    };

    /**
     * this should be called after the camper's phone number
     * has been saved.
     * 
     * it updates the local state indicating that the camper's data
     * is missing phone number.
     */
    const markPhoneNumberRegistered = () => {
        const current = get().stateFetchCamperProfile;
        if (current.kind === 'success' && current.type === 'camper') {
            set({
                stateFetchCamperProfile: {
                    kind: 'success',
                    type: 'camper',
                    profile: {
                        ...current.profile,
                        isRegPhoneNumber: true,
                    }
                }
            })
        }
    }

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
        markPhoneNumberRegistered,
    };
};