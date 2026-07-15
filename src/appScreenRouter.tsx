import { createBrowserRouter } from "react-router-dom";
import AppShell from "./components/AppShell";
import RegistrationScreen from "./components/screens/RegistrationScreen";
import MyDetailsScreen from "./components/screens/MyDetailsScreen";
import RegStatusScreen from "./components/screens/RegStatusScreen";
import RegCoordinatorsScreen from "./components/screens/RegCoordinatorsScreen";

const appScreenRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppShell />,
        children: [
            { index: true, element: <RegistrationScreen /> },
            { path: "/my-details", element: <MyDetailsScreen /> },
            { path: "/reg-status", element: <RegStatusScreen /> },
            { path: "/reg-coordinator", element: <RegCoordinatorsScreen />}
        ]
    },
])

export default appScreenRouter