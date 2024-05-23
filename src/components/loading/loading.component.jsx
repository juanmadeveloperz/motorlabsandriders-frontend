// Icons
import { LuLoader2 } from "react-icons/lu";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <LuLoader2 className="h-10 w-10 text-gray-500 animate-spin" />
    </div>
  );
};
