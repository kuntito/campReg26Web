

export interface RegistrationData {
    firstName: string;
    lastName: string;
    email: string;
    genderId: number | null;
    branchId: number | null;
    fellowshipId: number | null;
    unitId: number | null;
    countryCodeId: number | null;
    /** the digits after the country code */
    digitsPhoneNumber: string;
}


export interface CoordRegData {
    firstName: string;
    lastName: string;
    email: string;
    genderId: number | null;
    branchId: number | null;
    lodgeOptionId: number | null;
}