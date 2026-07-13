import { envConfig } from "../config/envConfig";
import { CamperProfileResponse } from "./getCamperProfile/getCamperProfile.types";
import { GetRegDropdownsResponse } from "./getRegDropdowns/getRegDropdowns.types";
import { GetRegStatusResponse } from "./getRegStatus/getRegStatus.types";
import { CamperDetailsReqBody, RegisterCamperResponse } from "./registerCamper/registerCamper.types";

const BASE_URL = envConfig.VITE_YC26_API_BASE_URL;
const yc26ApiClient = {
    getRegDropdowns: async (

    ): Promise<GetRegDropdownsResponse> => {
        const url = `${BASE_URL}/api/yc26/getRegDropdowns`;
        const res = await fetch(
            url,
            {
                headers: { 'ngrok-skip-browser-warning': 'true' }
            }
        );

        return res.json();
    },
    registerCamper: async (
        camperDetails: CamperDetailsReqBody,
    ): Promise<RegisterCamperResponse> => {
        const url = `${BASE_URL}/api/yc26/register`;
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            },
            body: JSON.stringify(camperDetails),
        });

        return await res.json();
    },
    getCamperProfile: async (
        camperMail: string,
    ): Promise<CamperProfileResponse> => {
        const url = `${BASE_URL}/api/yc26/camper-profile/${encodeURIComponent(camperMail)}`;
        const res = await fetch(
            url,
            {
                headers: { 'ngrok-skip-browser-warning': 'true' }
            }
        );

        return res.json();
    },
    getRegStatus: async (

    ): Promise<GetRegStatusResponse> => {
        const url = `${BASE_URL}/api/yc26/reg-status`;
        const res = await fetch(
            url,
            {
                headers: { 'ngrok-skip-browser-warning': 'true' }
            }
        );

        return res.json();
    },
}

export default yc26ApiClient;