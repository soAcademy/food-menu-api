import { getMenus } from "./controller/menu";

export const AppRoutes = [
  {
    path: '/get-menus',
    method: 'get',
    action: getMenus
  },
]
