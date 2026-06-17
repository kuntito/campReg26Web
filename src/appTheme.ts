import { extendTheme } from "@chakra-ui/react"

const colors = {
    palette: {
        platform: '#F9F9F9',
        colorRoom: '#1E2A49',
        colorVenue: '#E36255',
        colorBranch: '#D9D9D9',
        colorLife: '#FFFFFF',
        colorRaze: '#68B439',
    }
}

const fontSizes = {
    blaze: "24px",
    orion: "16px",
    hush: "12px",
}

const appTheme = extendTheme({
    colors,
    fontSizes,
    styles: {
        global: {
            body: {
                background: "palette.platform",
                color: "palette.room",
            }
        }
    },
})

export default appTheme;