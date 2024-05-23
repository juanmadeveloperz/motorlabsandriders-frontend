// Icons
import { LuLogIn, LuLogOut, LuUserPlus2 } from "react-icons/lu";

const constants = {
  LOGGED_IN_MENU_ITEMS: [
    {
      icon: LuLogOut,
      label: "Logout",
      path: "/logout",
    },
  ],
  LOGGED_OUT_MENU_ITEMS: [
    {
      label: "Login",
      path: "/login",
      icon: LuLogIn,
    },
    {
      label: "Registro",
      path: "/registro",
      icon: LuUserPlus2,
    },
  ],
};

export default constants;
