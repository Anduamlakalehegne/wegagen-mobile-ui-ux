import { createBrowserRouter } from "react-router";
import WelcomeScreen from "./screens/WelcomeScreen";
import VerificationScreen from "./screens/VerificationScreen";
import QuickActionsScreen from "./screens/QuickActionsScreen";
import PinEntryScreen from "./screens/PinEntryScreen";
import HomeScreen from "./screens/HomeScreen";
import WegagenTransferScreen from "./screens/WegagenTransferScreen";
import WegagenEBirrScreen from "./screens/WegagenEBirrScreen";
import OtherBankTransferScreen from "./screens/OtherBankTransferScreen";
import ConfirmationPinScreen from "./screens/ConfirmationPinScreen";
import TransferSuccessScreen from "./screens/TransferSuccessScreen";
import ToWalletScreen from "./screens/ToWalletScreen";
import WalletTransferFormScreen from "./screens/WalletTransferFormScreen";
import MicroFinanceScreen from "./screens/MicroFinanceScreen";
import TransactionScreen from "./screens/TransactionScreen";
import EthiopianAirlinesPaymentScreen from "./screens/EthiopianAirlinesPaymentScreen";
import WaterPaymentProviderScreen from "./screens/WaterPaymentProviderScreen";
import WaterPaymentFormScreen from "./screens/WaterPaymentFormScreen";

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
    path: "/confirm-pin",
    Component: ConfirmationPinScreen,
  },
  {
    path: "/home",
    Component: HomeScreen,
  },
  {
    path: "/transfer",
    Component: WegagenTransferScreen,
  },
  {
    path: "/ebirr-transfer",
    Component: WegagenEBirrScreen,
  },
  {
    path: "/other-bank-transfer",
    Component: OtherBankTransferScreen,
  },
  {
    path: "/transfer-success",
    Component: TransferSuccessScreen,
  },
  {
    path: "/wallet",
    Component: ToWalletScreen,
  },
  {
    path: "/wallet-form",
    Component: WalletTransferFormScreen,
  },
  {
    path: "/micro-finance",
    Component: MicroFinanceScreen,
  },
  {
    path: "/transactions",
    Component: TransactionScreen,
  },
  {
    path: "/ethiopian-airlines",
    Component: EthiopianAirlinesPaymentScreen,
  },
  {
    path: "/water-providers",
    Component: WaterPaymentProviderScreen,
  },
  {
    path: "/water-payment-form/:providerName",
    Component: WaterPaymentFormScreen,
  },
]);