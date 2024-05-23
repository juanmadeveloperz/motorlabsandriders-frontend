// Icons
import { LuEye, LuEyeOff } from "react-icons/lu";

export const TogglePasswordButton = ({
  handleToggleShowPassword,
  showPassword,
}) => {
  return (
    <button
      type="button"
      className="absolute z-10 top-1/2 right-4 transform -translate-y-1/2 text-gray-400"
      onClick={handleToggleShowPassword}
    >
      {showPassword ? (
        <LuEyeOff className="h-5 w-5" />
      ) : (
        <LuEye className="h-5 w-5" />
      )}
    </button>
  );
};
