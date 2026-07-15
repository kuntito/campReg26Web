export type CoordDetailsReqBody = {
    firstName: string;
    lastName: string;
    email: string;
    genderId: number;
    branchId: number;
    lodgeOptionId: number;
};

export type RegisteredCoordinatorDetails = {
    firstName: string;
    lastName: string;
    email: string;
    genderName: string;
    branchName: string;
    lodgeOptionText: string;
}

export type RegisterCoordinatorResponse =
    | {
          success: true;
          registeredCoordinatorDetails: RegisteredCoordinatorDetails;
      }
    | {
          success: false;
          clientMessage?: string;
          debug: object;
    };