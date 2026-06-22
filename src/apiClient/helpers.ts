/**
 * wraps an API call in a try-catch block.
 *
 * if the call fails, it logs the error along with fnDesc.
 * fnDesc should describe what the call does — enough for a debugger to know what failed.
 *
 * returns null on failure.
 */
export const safeApiCall = async <T>(
    fn: () => Promise<T>,
    fnDesc: string,
): Promise<T | null> => {
    try {
        return await fn();
    } catch (e) {
        console.log(
            `api call failed: '${fnDesc}'`,
            e
        );
    }
    return null;
}