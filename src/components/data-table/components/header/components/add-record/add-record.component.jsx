// Components
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// Constants
import constants from "./constants/add-record.constants";
// Icons
import { LuPlus } from "react-icons/lu";

export const AddRecord = ({ handleCreate }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" onClick={handleCreate}>
          <span className="sr-only">{constants.SR_LABEL}</span>
          <LuPlus className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Añadir registro</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
