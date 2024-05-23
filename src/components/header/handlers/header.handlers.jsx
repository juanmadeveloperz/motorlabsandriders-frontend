const navigationMenuLinkClickHandler = ({ setOpen }) => {
  setOpen(false);
};

const HeaderHandlers = ({ setOpen }) => {
  return {
    handleNavigationMenuLinkClick: () =>
      navigationMenuLinkClickHandler({ setOpen }),
  };
};

export default HeaderHandlers;
