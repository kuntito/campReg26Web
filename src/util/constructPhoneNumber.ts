import { CountryCodeApi } from "../apiClient/getRegDropdowns/getRegDropdowns.types";

/**
 * concats the country code with the phone number digits.
 * 
 * also, strips the first zero from the digits,
 * if the digits are more than 10 characters.
 */
export const constructPhoneNumber = (
    countryCodeId: number,
    countryCodes: CountryCodeApi[],
    digitsPhoneNumber: string,
): string => {
    
    const item = countryCodes.find(
        cc => cc.countryCodeId === countryCodeId
    );

    const countryCode = item?.countryCode ?? "+234";

    let normalizedPhoneNumber = digitsPhoneNumber;
    if (digitsPhoneNumber.startsWith("0") && digitsPhoneNumber.length > 10) {
        normalizedPhoneNumber = digitsPhoneNumber.slice(1);
    }

    return `${countryCode}${normalizedPhoneNumber}`;
};