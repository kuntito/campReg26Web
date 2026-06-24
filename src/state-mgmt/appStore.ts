import { create } from "zustand";
import { createRegFormSlice, RegFormSlice } from "./slices/regFormSlice";
import { createRegCamperSlice, RegCamperSlice } from "./slices/reqCamperSlice";


type AppStore = RegFormSlice & RegCamperSlice;

const useAppStore = create<AppStore>()(
    (...args) => {
        const regFormSlice = createRegFormSlice(...args);
        const regCamperSlice = createRegCamperSlice(...args);
        
        return {
            ...regFormSlice,
            ...regCamperSlice,
        }
    }
)

export default useAppStore;