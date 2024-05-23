// Constants
import constants from "./constants/selected-rows.constants";

export const SelectedRows = ({ table }) => {
  const selectedRows = table.getFilteredSelectedRowModel().rows.length;
  const label =
    selectedRows === 1 ? constants.LABEL_SINGULAR : constants.LABEL_PLURAL;

  if (!selectedRows) {
    return null;
  }

  return (
    <div className="flex-1 text-sm text-muted-foreground">
      <span>
        {selectedRows} {label}
      </span>
    </div>
  );
};
