// Components
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Logo } from "../logo/logo.component";
import { NavigationMenu } from "../navigation-menu/navigation-menu.component";
// Constants
import constants from "./constants/mobile-drawer.constants";
import headerConstants from "../../constants/header.constants";
// Hooks
import HeaderHook from "../../hook/header.hook";
// Icons
import { LuMenu, LuX, LuShoppingBag } from "react-icons/lu";
// Stores
import { useAuthStore } from "@/core/stores/auth.store";

export const MobileDrawer = () => {
  const { user } = useAuthStore();
  const { open, setOpen } = HeaderHook();

  const items = user
    ? headerConstants.LOGGED_IN_NAVIGATION_MENU_ITEMS
    : headerConstants.LOGGED_OUT_NAVIGATION_MENU_ITEMS;

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="rounded-full">
          <LuMenu size={24} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-[280px]">
        <DrawerHeader className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <LuShoppingBag size={24} />
            <Logo />
          </span>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon" className=" justify-self-end">
              <LuX size={24} />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <NavigationMenu
          {...constants.NAVIGATION_MENU_MOBILE_PROPS}
          {...{ items, setOpen, user }}
        />
      </DrawerContent>
    </Drawer>
  );
};
