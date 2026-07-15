import { Location } from "react-router-dom";

// FIXME, at time of writing, there's only one coordinator page in 
// `appScreenRouter.tsx`, and it has 'coordinator' in the pathname.
export const checkIsCoordinatorPage = (
    location: Location
) => {
    return location.pathname.toLowerCase().includes("coordinator");
} 