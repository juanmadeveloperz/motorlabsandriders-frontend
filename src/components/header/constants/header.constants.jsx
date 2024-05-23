// Icons
import {
  LuMessagesSquare,
  LuLayoutGrid,
  LuFileEdit,
  LuLandmark,
  LuLogIn,
  LuUserPlus2,
  LuUsers,
} from "react-icons/lu";

const loggedInNavigationMenuItems = [
  {
    icon: LuLandmark,
    label: "Foro",
    path: "/foro",
    admin: false,
  },
  {
    icon: LuFileEdit,
    label: "Hilos",
    path: "/hilos",
    admin: true,
  },
  {
    icon: LuLayoutGrid,
    label: "Categorías",
    path: "/categorias",
    admin: true,
  },
  {
    icon: LuMessagesSquare,
    label: "Comentarios",
    path: "/comentarios",
    admin: true,
  },
  {
    icon: LuUsers,
    label: "Usuarios",
    path: "/usuarios",
    admin: true,
  },
];

const loggedOutNavigationMenuItems = [
  {
    icon: LuLogIn,
    label: "Login",
    path: "/login",
    admin: false,
  },
  {
    icon: LuUserPlus2,
    label: "Registro",
    path: "/registro",
    admin: false,
  },
];

const constants = {
  LOGGED_IN_NAVIGATION_MENU_ITEMS: loggedInNavigationMenuItems,
  LOGGED_OUT_NAVIGATION_MENU_ITEMS: loggedOutNavigationMenuItems,
  NAVIGATION_MENU_DESKTOP_PROPS: {
    fullWidth: false,
    itemsAlignment: "left",
    className: "hidden md:flex",
    orientation: "horizontal",
  },
  NAVIGATION_MENU_MOBILE_PROPS: {
    fullWidth: true,
    itemsAlignment: "left",
    orientation: "vertical",
  },
};

export default constants;
