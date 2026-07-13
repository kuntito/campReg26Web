import { safeApiCall } from "./helpers";
import { CamperDetailsReqBody } from "./registerCamper/registerCamper.types";
import yc26ApiClient from "./yc26ApiClient";

export const yc26DataSource = {
    getRegDropdowns: () => safeApiCall(
        () => yc26ApiClient.getRegDropdowns(),
        "gets the options for all dropdown fields on the reg form"
    ),
    registerCamper: (camperDetails: CamperDetailsReqBody) => safeApiCall(
        () => yc26ApiClient.registerCamper(camperDetails),
        "registers a new camper"
    ),
    getRegStatus: () => safeApiCall(
        () => yc26ApiClient.getRegStatus(),
        "gets the number of registrants per branch"
    ),
    getCamperProfile: (camperEmail: string) => safeApiCall(
        () => yc26ApiClient.getCamperProfile(camperEmail),
        "gets a campers profile by email lookup"
    )
};