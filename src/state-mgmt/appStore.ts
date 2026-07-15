import { create } from "zustand";
import { createCamperRegFormSlice, CampersRegFormSlice } from "./slices/regFormSlice";
import { createRegCamperSlice, RegCamperSlice } from "./slices/reqCamperSlice";
import { CamperProfileSlice, createCamperProfileSlice } from "./slices/camperProfileSlice";
import { createCamperRegStatusSlice, CamperRegStatusSlice } from "./slices/regStatusSlice";
import { createRegCoordSlice, RegCoordSlice } from "./slices/regCoordSlice";
import { CoordRegFormSlice, createCoordRegFormSlice } from "./slices/coordinatorRegFormSlice";


type AppStore = 
    CampersRegFormSlice 
    & RegCamperSlice
    & CamperProfileSlice
    & CamperRegStatusSlice
    & RegCoordSlice
    & CoordRegFormSlice;

const useAppStore = create<AppStore>()(
    (...args) => {
        const regFormSlice = createCamperRegFormSlice(...args);
        const regCamperSlice = createRegCamperSlice(...args);
        const camperProfileSlice = createCamperProfileSlice(...args);
        const regStatusSlice = createCamperRegStatusSlice(...args);
        const regCoordSlice = createRegCoordSlice(...args);
        const coordRegFormSlice = createCoordRegFormSlice(...args);
        
        return {
            ...regFormSlice,
            ...regCamperSlice,
            ...camperProfileSlice,
            ...regStatusSlice,
            ...regCoordSlice,
            ...coordRegFormSlice,
        }
    }
)

export default useAppStore;