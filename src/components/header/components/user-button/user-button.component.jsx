// Vendors
import { Link } from "react-router-dom";
// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// Constants
import constants from "./constants/user-button.constants";
// Icons
import { FaUser } from "react-icons/fa";
// Stores
import { useAuthStore } from "@/core/stores/auth.store";

export const UserButton = () => {
  const { user } = useAuthStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback className="bg-primary">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        {user && (
          <>
            <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {constants.LOGGED_IN_MENU_ITEMS.map((item, index) => {
                return (
                  <DropdownMenuItem
                    key={index}
                    asChild
                    className="cursor-pointer"
                  >
                    <Link to={item.path}>
                      <span className="flex items-center gap-2">
                        <item.icon size={16} />
                        {item.label}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuGroup>
          </>
        )}
        {!user &&
          constants.LOGGED_OUT_MENU_ITEMS.map((item, index) => {
            return (
              <DropdownMenuItem key={index} asChild className="cursor-pointer">
                <Link to={item.path}>
                  <span className="flex items-center gap-2">
                    <item.icon size={16} />
                    {item.label}
                  </span>
                </Link>
              </DropdownMenuItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
