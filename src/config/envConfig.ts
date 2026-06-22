/**
 * tells typescript to include vite's type definitions.
 * without it, `import.meta.env` would be unrecognized.
 */
/// <reference types="vite/client" />  


/**
 * vite only exposes env vars prefixed with `VITE_` to client code.
 * this prevents accidentally leaking server secrets to the browser.
 */
const requiredVariables = [
    "VITE_YC26_API_BASE_URL",
] as const;


// this automates typing out all the variable names in `requiredVariables`
// if `requiredVariables = ["foo", "bar"]`
// this variable becomes "foo" | "bar"
type RequiredVariableKey = (typeof requiredVariables)[number];


// this allows TS to recognize the variables as properties of `envConfig`
// so you could do, `envConfig.foo`
type ConfigType = Record<RequiredVariableKey, string>;


export const envConfig = Object.fromEntries(
    requiredVariables.map((key) => [key, import.meta.env[key]!])
) as ConfigType;