// Icons
import {
  LuAlertCircle,
  LuAlertTriangle,
  LuCheckCircle,
  LuInfo,
} from "react-icons/lu";

export const Alert = ({
  alignment = "center",
  fullWidth = true,
  text,
  type,
}) => {
  const alignmentclasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const colorClasses = {
    error: "bg-red-100 text-red-900",
    warning: "bg-yellow-100 text-yellow-900",
    info: "bg-blue-100 text-blue-900",
    success: "bg-emerald-100 text-emerald-900",
  };

  const fullWidthClasses = fullWidth ? "w-full" : "";

  if (!text) return null;

  return (
    <div
      className={`flex ${alignmentclasses[alignment]} items-center gap-x-2 py-3 px-4 rounded-md text-sm ${colorClasses[type]} ${fullWidthClasses}`}
    >
      {type === "error" && <LuAlertCircle className="h-4 w-4" />}
      {type === "info" && <LuInfo className="h-4 w-4" />}
      {type === "success" && <LuCheckCircle className="h-4 w-4" />}
      {type === "warning" && <LuAlertTriangle className="h-4 w-4" />}
      <p>{text}</p>
    </div>
  );
};
