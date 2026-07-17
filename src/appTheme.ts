import { extendTheme } from "@chakra-ui/react"

const colors = {
    palette: {
        platform: '#F9F9F9',
        room: '#1E2A49',
        roomAlpha: '#1E2A4999', // 99 is 60% opacity
        venue: '#E36255',
        branch: '#D9D9D9',
        life: '#FFFFFF',
        lifeAlpha: '#FFFFFFE6', // CC is 80% opacity
        raze: '#68B439',
        skylar: '#8B8988',
        unit: '#3A3339'
    }
}

const textStyles = {
    blaze: {
        fontSize: "24px",
        fontWeight: "normal",
    },
    orion: {
        fontSize: "15px",
        fontWeight: "normal",
    },
    hush: {
        fontSize: "12px",
        fontWeight: "normal",
    }
}

const appTheme = extendTheme({
    colors,
    textStyles,
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