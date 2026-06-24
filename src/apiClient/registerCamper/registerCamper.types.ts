export type CamperDetailsReqBody = {
    firstName: string;
    lastName: string;
    email: string;
    genderId: number;
    branchId: number;
    fellowshipId: number;
    unitId: number;
};

export type RegisteredCamperDetails = {
    firstName: string;
    lastName: string;
    email: string;
    genderName: string;
    branchName: string;
    fellowshipName: string;
    unitName: string;
};

export type RegisterCamperResponse =
    | {
          success: true;
          registeredCamperDetails: RegisteredCamperDetails;
      }
    | {
          success: false;
          clientMessage?: string;
          debug: object;
      };