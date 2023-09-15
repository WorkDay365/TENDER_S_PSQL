import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Cabinet from "./pages/Cabinet";
import Tender from "./pages/Tender";
import TenderUA from "./pages/TenderUA";
import Test from "./pages/test";
import Settings from "./pages/Settings";
import Created from "./pages/Created";
import Selected from "./pages/Selected";
import {
  TEST_ROUTE,
  ADMIN_ROUTE,
  CABINET_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  TENDERUA_ROUTE,
  TENDER_ROUTE,
  SETTINGS_ROUTE,
  CREATED_ROUTE,
  SELECTED_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: CABINET_ROUTE,
    Component: Cabinet,
  },
  {
    path: TENDER_ROUTE + "/:id",
    Component: Tender,
  },
  {
    path: TENDERUA_ROUTE,
    Component: TenderUA,
  },
  {
    path: SETTINGS_ROUTE,
    Component: Settings,
  },
  {
    path: CREATED_ROUTE,
    Component: Created,
  },
  {
    path: SELECTED_ROUTE,
    Component: Selected,
  },
];

export const publicRoutes = [
  {
    path: TEST_ROUTE,
    Component: Test,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
