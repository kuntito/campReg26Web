import { extendTheme } from "@chakra-ui/react"

const colors = {
    palette: {
        platform: '#F9F9F9',
        room: '#1E2A49',
        roomAlpha: '#1E2A4999', // 99 is 50% opacity
        venue: '#E36255',
        branch: '#D9D9D9',
        life: '#FFFFFF',
        lifeAlpha: '#FFFFFF99', // 99 is 50% opacity
        raze: '#68B439',
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