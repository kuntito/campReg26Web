import { StateCreator } from "zustand";
import { CoordDetailsReqBody, RegisteredCoordinatorDetails } from "../../apiClient/registerCoordinator/registerCoordinator.types";
import { yc26DataSource } from "../../apiClient/yc26DataSource";

export type RegCoordState = 
    | { kind: 'idle' }
    | { kind: 'awaiting response' }
    | { 
        kind: 'success',
        registeredCoordDetails: RegisteredCoordinatorDetails,
    }
    | { 
        kind: 'error',
        reason: string,
    };

export interface RegCoordSlice {
    regCoordState: RegCoordState;
    regCoordinator: (
        reqBody: CoordDetailsReqBody
    ) => Promise<void>;
    resetRegCoordState: () => void;
}

export const createRegCoordSlice: StateCreator<RegCoordSlice> = (
    set,
    get,
) => {
    const defaultRegCoordState: RegCoordState = { kind: 'idle' };

    const regCoordinator = async (reqBody: CoordDetailsReqBody) => {
        set({ regCoordState: { kind: 'awaiting response' } });

        const res = await yc26DataSource.registerCoordinator(reqBody);

        if (res == null || !res.success) {
            set({
                regCoordState: {
                    kind: 'error',
                    reason: res == null || res.clientMessage == undefined
                        ? "registration failed" : res.clientMessage
                }
            });
            return;
        }

        set({
            regCoordState: {
                kind: 'success',
                registeredCoordDetails: res.registeredCoordinatorDetails,
            }
        });
    };

    const resetRegCoordState = () => {
        set({
            regCoordState: {
                kind: 'idle'
            }
        });
    };

    return {
        regCoordState: defaultRegCoordState,
        regCoordinator,
        resetRegCoordState,
    };
}