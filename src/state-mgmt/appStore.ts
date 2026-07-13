import { create } from "zustand";
import { createRegFormSlice, RegFormSlice } from "./slices/regFormSlice";
import { createRegCamperSlice, RegCamperSlice } from "./slices/reqCamperSlice";
import { CamperProfileSlice, createCamperProfileSlice } from "./slices/camperProfileSlice";


type AppStore = RegFormSlice & RegCamperSlice & CamperProfileSlice;

const useAppStore = create<AppStore>()(
    (...args) => {
        const regFormSlice = createRegFormSlice(...args);
        const regCamperSlice = createRegCamperSlice(...args);
        const camperProfileSlice = createCamperProfileSlice(...args);
        
        return {
            ...regFormSlice,
            ...regCamperSlice,
            ...camperProfileSlice,
        }
    }
)

export default useAppStore;