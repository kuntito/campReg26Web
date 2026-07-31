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
        type: 'camper';
        profile: CamperProfile;
    }
    | {
        success: true;
        type: 'coordinator';
    }
    | {
          success: false;
          clientMessage?: string;
          debug?: object;
      };