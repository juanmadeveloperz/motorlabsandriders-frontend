// Vendors
import { Link } from "react-router-dom";
// Components
import { Button } from "@/components/ui/button";

export const ButtonLink = ({ fullWidth = false, href, label, size = "sm" }) => (
  <Button
    variant="link"
    className={`${fullWidth && "w-full"} font-normal px-0`}
    size={size}
    asChild
  >
    <Link to={href}>{label}</Link>
  </Button>
);
