// Constants
import constants from "./constants/page-indicator.constants";

export const PageIndicator = ({ table }) => {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  return (
    <div className="hidden sm:flex w-[100px] items-center justify-center text-sm font-medium">
      {constants.LABEL} {pageIndex + 1} {constants.SEPARATOR} {pageCount}
    </div>
  );
};
