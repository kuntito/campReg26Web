export type CamperProfile = {
    camperId: number;
    firstName: string;
    lastName: string;
    genderName: string;
    branchName: string;
    fellowshipName: string;
    unitName: string;
    unitDutiesMdText: string | null;
    isRegPhoneNumber: boolean;
    familyName: string | null;
    familyInfoMdText: string | null;
};

export type CamperProfileResponse =
    | {
          success: true;
          profile: CamperProfile;
      }
    | {
          success: false;
          clientMessage?: string;
          debug?: object;
      };