import { safeApiCall } from "./helpers";
import yc26ApiClient from "./yc26ApiClient";

export const yc26DataSource = {
    getRegDropdowns: () => safeApiCall(
        () => yc26ApiClient.getRegDropdowns(),
        "gets the options for all dropdown fields on the reg form"
    )
};