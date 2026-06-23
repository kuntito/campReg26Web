import { create } from "zustand";
import { createRegFormSlice, RegFormSlice } from "./slices/regFormSlice";


type AppStore = RegFormSlice 

const useAppStore = create<AppStore>()(
    (...args) => {
        const regFormSlice = createRegFormSlice(...args);
        
        return {
            ...regFormSlice,
        }
    }
)

export default useAppStore;