// Components
import { Item } from "./components/item/item.component";
// Libs
import { cn } from "@/core/lib/utils";

export const NavigationMenu = ({
  className,
  fullWidth,
  items,
  itemsAlignment = "left",
  orientation = "vertical",
  setOpen,
  user,
}) => {
  const orientationClass = {
    horizontal: "flex-row",
    vertical: "flex-col",
  };

  return (
    <nav className={cn("p-2", className)}>
      <ul className={`flex gap-2 list-none ${orientationClass[orientation]}`}>
        {items.map((item, index) => (
          <Item
            {...{ fullWidth, item, itemsAlignment, orientation, setOpen, user }}
            key={index}
          />
        ))}
      </ul>
    </nav>
  );
};
