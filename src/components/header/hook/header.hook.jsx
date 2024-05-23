// Vendors
import { useState } from "react";
// Handlers
import HeaderHandlers from "../handlers/header.handlers";

const HeaderHook = () => {
  const [open, setOpen] = useState(false);

  const { handleNavigationMenuLinkClick } = HeaderHandlers({ setOpen });

  return {
    handleNavigationMenuLinkClick,
    open,
    setOpen,
  };
};

export default HeaderHook;
