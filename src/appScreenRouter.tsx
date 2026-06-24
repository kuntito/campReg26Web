import { createBrowserRouter } from "react-router-dom";
import AppShell from "./components/AppShell";
import RegistrationScreen from "./components/screens/RegistrationScreen";
import MyDetailsScreen from "./components/screens/MyDetailsScreen";

const appScreenRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppShell />,
        children: [
            { index: true, element: <RegistrationScreen /> },
            { path: "/my-details", element: <MyDetailsScreen /> }
        ]
    },
])

export default appScreenRouter