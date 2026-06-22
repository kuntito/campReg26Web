
export type Sex = "male" | "female";

export interface RegistrationData {
    firstName: string;
    lastName: string;
    email: string;
    sex: Sex | null;
    branchId: number | null;
    fellowshipId: number | null;
    unitId: number | null;
}