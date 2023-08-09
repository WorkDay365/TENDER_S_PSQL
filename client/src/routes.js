import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Cabinet from './pages/Cabinet'
import Tender from './pages/Tender'
import TenderUA from './pages/TenderUA'
import {ADMIN_ROUTE, CABINET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TENDERUA_ROUTE, TENDER_ROUTE} from "./utils/consts"



export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CABINET_ROUTE,
        Component: Cabinet
    }
]

export const publicRoutes = [
    {
        path: TENDERUA_ROUTE,
        Component: TenderUA
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: TENDER_ROUTE + '/:id',
        Component: Tender
    }, 
  
]