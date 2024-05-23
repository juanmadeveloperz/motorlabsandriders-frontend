// Vendors
import { Link } from "react-router-dom";
// Components
import { Button } from "@/components/ui/button";

export const Item = ({
  fullWidth,
  item,
  itemsAlignment,
  orientation,
  setOpen,
  user,
}) => {
  const fullWidthClass = fullWidth ? "w-full" : "";
  const itemsAlignmentClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  if (user && user.role !== "admin" && item.admin) {
    return null;
  }

  return (
    <li>
      <Button
        asChild
        variant="ghost"
        className={`${itemsAlignmentClass[itemsAlignment]} ${fullWidthClass}`}
      >
        <Link to={item.path} onClick={() => setOpen?.(false)}>
          {orientation === "horizontal" ? (
            item.label
          ) : (
            <span className="flex items-center gap-2">
              <item.icon size={16} />
              {item.label}
            </span>
          )}
        </Link>
      </Button>
    </li>
  );
};
