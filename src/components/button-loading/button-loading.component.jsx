// Components
import { Button } from "@/components/ui/button";
// Icons
import { LuLoader2 } from "react-icons/lu";

export const ButtonLoading = ({
  fullWidth = false,
  label,
  loading,
  showLabel = false,
  type = "button",
}) => {
  const fullWidthClasses = fullWidth ? "w-full" : "";

  const buttonContent = loading ? (
    <>
      <LuLoader2 className="mr-2 h-5 w-5 animate-spin" />
      {showLabel && label}
    </>
  ) : (
    label
  );

  return (
    <Button disabled={loading} type={type} className={`${fullWidthClasses}`}>
      {buttonContent}
    </Button>
  );
};
