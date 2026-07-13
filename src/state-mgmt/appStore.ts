import { create } from "zustand";
import { createRegFormSlice, RegFormSlice } from "./slices/regFormSlice";
import { createRegCamperSlice, RegCamperSlice } from "./slices/reqCamperSlice";
import { CamperProfileSlice, createCamperProfileSlice } from "./slices/camperProfileSlice";
import { createRegStatusSlice, RegStatusSlice } from "./slices/regStatusSlice";


type AppStore = RegFormSlice & RegCamperSlice & CamperProfileSlice & RegStatusSlice;

const useAppStore = create<AppStore>()(
    (...args) => {
        const regFormSlice = createRegFormSlice(...args);
        const regCamperSlice = createRegCamperSlice(...args);
        const camperProfileSlice = createCamperProfileSlice(...args);
        const regStatusSlice = createRegStatusSlice(...args);
        
        return {
            ...regFormSlice,
            ...regCamperSlice,
            ...camperProfileSlice,
            ...regStatusSlice,
        }
    }
)

export default useAppStore;