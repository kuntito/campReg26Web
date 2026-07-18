export type ReqBodyAddCamperPhoneNumber = {
    phoneNumber: string;
    camperId: number;
}

export type AddCamperPhoneNumberResponse = 
    | {
        success: true;
    }
    | {
        success: false;
        clientMessage: string;
        debug: object;
    }