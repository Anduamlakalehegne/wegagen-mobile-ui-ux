import { createBrowserRouter } from "react-router";
import WelcomeScreen from "./screens/WelcomeScreen";
import VerificationScreen from "./screens/VerificationScreen";
import QuickActionsScreen from "./screens/QuickActionsScreen";
import PinEntryScreen from "./screens/PinEntryScreen";
import HomeScreen from "./screens/HomeScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WelcomeScreen,
  },
  {
    path: "/verify",
    Component: VerificationScreen,
  },
  {
    path: "/quick-actions",
    Component: QuickActionsScreen,
  },
  {
    path: "/pin-entry",
    Component: PinEntryScreen,
  },
  {
    path: "/home",
    Component: HomeScreen,
  },
]);
