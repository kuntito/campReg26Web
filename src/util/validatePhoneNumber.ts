export const validatePhoneNumber = (phoneNumber: string): boolean => {
    return /^\d{10,15}$/.test(phoneNumber.trim());
}