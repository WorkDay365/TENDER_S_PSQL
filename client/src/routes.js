import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Cabinet from "./pages/Cabinet";
import Main from "./pages/Main";
import Tender from "./pages/Tender";
import TenderUA from "./pages/TenderUA";
import Test from "./pages/test";
import {
  TEST_ROUTE,
  ADMIN_ROUTE,
  CABINET_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  TENDERUA_ROUTE,
  TENDER_ROUTE,
  MAIN_ROUTE,
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
    path: TENDERUA_ROUTE,
    Component: TenderUA,
  },
  {
    path: TENDER_ROUTE + "/:id",
    Component: Tender,
  },
];

export const publicRoutes = [
  {
    path: TEST_ROUTE,
    Component: Test,
  },
  {
    path: MAIN_ROUTE,
    Component: Main,
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
