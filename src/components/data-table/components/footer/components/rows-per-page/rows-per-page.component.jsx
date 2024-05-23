// Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// Constants
import constants from "./constants/rows-per-page.constants";

export const RowsPerPage = ({ table }) => {
  const pageSize = table.getState().pagination.pageSize;

  return (
    <div className="flex items-center space-x-2">
      <p className="hidden sm:flex text-sm font-medium">{constants.LABEL}</p>
      <Select
        value={pageSize}
        onValueChange={(value) => {
          table.setPageSize(Number(value));
        }}
      >
        <SelectTrigger className="h-8 w-[70px]">
          <SelectValue placeholder={pageSize} />
        </SelectTrigger>
        <SelectContent side="top">
          {constants.PAGE_SIZES.map((pageSize) => (
            <SelectItem key={pageSize} value={pageSize}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
