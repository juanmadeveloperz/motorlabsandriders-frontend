// Components
import { Button } from "@/components/ui/button";
// Constants
import constants from "./constants/pagination.constants";
// Icons
import {
  LuChevronLeft,
  LuChevronRight,
  LuChevronsLeft,
  LuChevronsRight,
} from "react-icons/lu";

export const Pagination = ({ table }) => (
  <div className="flex items-center gap-2">
    <Button
      variant="outline"
      size="icon"
      className="hidden lg:flex"
      onClick={() => table.setPageIndex(0)}
      disabled={!table.getCanPreviousPage()}
    >
      <span className="sr-only">{constants.SR_FIRST_PAGE}</span>
      <LuChevronsLeft className="h-4 w-4" />
    </Button>
    <Button
      variant="outline"
      size="icon"
      className=""
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      <span className="sr-only">{constants.SR_PREVIOUS_PAGE}</span>
      <LuChevronLeft className="h-4 w-4" />
    </Button>
    <Button
      variant="outline"
      size="icon"
      className=""
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
    >
      <span className="sr-only">{constants.SR_NEXT_PAGE}</span>
      <LuChevronRight className="h-4 w-4" />
    </Button>
    <Button
      variant="outline"
      size="icon"
      className="hidden lg:flex"
      onClick={() => table.setPageIndex(table.getPageCount() - 1)}
      disabled={!table.getCanNextPage()}
    >
      <span className="sr-only">{constants.SR_LAST_PAGE}</span>
      <LuChevronsRight className="h-4 w-4" />
    </Button>
  </div>
);
