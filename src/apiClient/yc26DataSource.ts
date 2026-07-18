import { ReqBodyAddCamperPhoneNumber } from "./addCamperPhoneNumber/addCamperPhoneNumber.types";
import { safeApiCall } from "./helpers";
import { CamperDetailsReqBody } from "./registerCamper/registerCamper.types";
import { CoordDetailsReqBody } from "./registerCoordinator/registerCoordinator.types";
import yc26ApiClient from "./yc26ApiClient";

export const yc26DataSource = {
    getRegDropdowns: () => safeApiCall(
        () => yc26ApiClient.getRegDropdowns(),
        "gets the options for all dropdown fields on the reg form"
    ),
    getCoordRegDropdowns: () => safeApiCall(
        () => yc26ApiClient.getCoordRegDropdowns(),
        "gets the dropdown options for the coordinators registration form"
    ),
    registerCamper: (camperDetails: CamperDetailsReqBody) => safeApiCall(
        () => yc26ApiClient.registerCamper(camperDetails),
        "registers a new camper"
    ),
    registerCoordinator: (coordinatorDetails: CoordDetailsReqBody) => safeApiCall(
        () => yc26ApiClient.registerCoordinator(coordinatorDetails),
        "registers a new camp coordinator"
    ),
    getRegStatus: () => safeApiCall(
        () => yc26ApiClient.getRegStatus(),
        "gets the number of registrants per branch"
    ),
    getCamperProfile: (camperEmail: string) => safeApiCall(
        () => yc26ApiClient.getCamperProfile(camperEmail),
        "gets a campers profile by email lookup"
    ),
    addPhoneNumber: (reqBody: ReqBodyAddCamperPhoneNumber) => safeApiCall(
        () => yc26ApiClient.addPhoneNumber(reqBody),
        "adds phone number to campers info"
    )
};