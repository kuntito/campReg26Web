import { create } from "zustand";
import { createCamperRegFormSlice, CampersRegFormSlice } from "./slices/regFormSlice";
import { createRegCamperSlice, RegCamperSlice } from "./slices/reqCamperSlice";
import { CamperProfileSlice, createCamperProfileSlice } from "./slices/camperProfileSlice";
import { createCamperRegStatusSlice, CamperRegStatusSlice } from "./slices/regStatusSlice";


type AppStore = CampersRegFormSlice & RegCamperSlice & CamperProfileSlice & CamperRegStatusSlice;

const useAppStore = create<AppStore>()(
    (...args) => {
        const regFormSlice = createCamperRegFormSlice(...args);
        const regCamperSlice = createRegCamperSlice(...args);
        const camperProfileSlice = createCamperProfileSlice(...args);
        const regStatusSlice = createCamperRegStatusSlice(...args);
        
        return {
            ...regFormSlice,
            ...regCamperSlice,
            ...camperProfileSlice,
            ...regStatusSlice,
        }
    }
)

export default useAppStore;