import { StateCreator } from "zustand";
import { CamperDetailsReqBody, RegisteredCamperDetails } from "../../apiClient/registerCamper/registerCamper.types";
import { yc26DataSource } from "../../apiClient/yc26DataSource";

export type RegCamperStatus = 
    | { kind: 'idle' }
    | { kind: 'awaiting response' }
    | { 
        kind: 'success',
        registeredCamperDetails: RegisteredCamperDetails,
    }
    | { 
        kind: 'error',
        reason: string,
    }

export interface RegCamperSlice {
    regCamperStatus: RegCamperStatus;
    regCamper: (
        reqBody: CamperDetailsReqBody
    ) => Promise<void>;
    resetRegStatus: () => void;
}

export const createRegCamperSlice: StateCreator<RegCamperSlice> = (
    set,
    get
) => {
    const defaultRegCamperState: RegCamperStatus = { kind: 'idle' };

    const regCamper = async (reqBody: CamperDetailsReqBody) => {
        console.log("regCamper called");
        set({ regCamperStatus: { kind: 'awaiting response' } });

        const res = await yc26DataSource.registerCamper(reqBody);

        if (res == null || !res.success) {
            set({
                regCamperStatus: { 
                    kind: 'error',
                    reason: res == null || res.clientMessage == undefined 
                        ? "registration failed" : res.clientMessage 
                }
            });
            return;
        }

        set({
            regCamperStatus: {
                kind: 'success',
                registeredCamperDetails: res.registeredCamperDetails,
            }
        });
    };
    
    const resetRegStatus = () => {
        set({
            regCamperStatus: {
                kind: 'idle'
            }
        });
    }

    return {
        regCamperStatus: defaultRegCamperState,
        regCamper,
        resetRegStatus
    };
}