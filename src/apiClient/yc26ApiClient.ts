import { envConfig } from "../config/envConfig";

const BASE_URL = envConfig.VITE_YC26_API_BASE_URL;
const yc26ApiClient = {
    getRegDropdowns: async (

    ): Promise<GetRegDropdownsResponse> => {
        const url = `${BASE_URL}/getRegDropdowns`;
        const res = await fetch(
            url,
            {
                headers: { 'ngrok-skip-browser-warning': 'true' }
            }
        );

        return res.json();
    }
}

export default yc26ApiClient;