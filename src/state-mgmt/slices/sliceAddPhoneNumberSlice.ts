import { StateCreator } from "zustand";
import { yc26DataSource } from "../../apiClient/yc26DataSource";
import { ReqBodyAddCamperPhoneNumber } from "../../apiClient/addCamperPhoneNumber/addCamperPhoneNumber.types";

export type StateAddPhoneNumber = 
    | { kind: 'idle' }
    | { kind: 'updating' }
    | { kind: 'success' }
    | { 
        kind: 'error',
        reason: string,
    }

    
export interface SliceAddPhoneNumber {
    stateAddPhoneNumber: StateAddPhoneNumber;
    addPhoneNumber: (
        reqBody: ReqBodyAddCamperPhoneNumber
    ) => Promise<void>;
    resetAddPhoneNumberState: () => void;
}

export const createAddPhoneNumberSlice: StateCreator<SliceAddPhoneNumber> = (
    set,
    get
) => {
    const defaultState: StateAddPhoneNumber = { kind: 'idle' };

    const addPhoneNumber = async (reqBody: ReqBodyAddCamperPhoneNumber) => {
        set({ 
            stateAddPhoneNumber: {
                kind: 'updating'
            }
        });

        const res = await yc26DataSource.addPhoneNumber(reqBody);

        if (res == null || !res.success) {
            set({
                stateAddPhoneNumber: {
                    kind: 'error',
                    reason: res == null || res.clientMessage == undefined
                        ? "something went wrong" : res.clientMessage
                }
            });
            return;
        }

        set({
            stateAddPhoneNumber: {
                kind: 'success',
            }
        });
    };

    const resetAddPhoneNumberState = () => {
        set({
            stateAddPhoneNumber: {
                kind: 'idle'
            }
        });
    };

    return {
        stateAddPhoneNumber: defaultState,
        addPhoneNumber,
        resetAddPhoneNumberState,
    };
};