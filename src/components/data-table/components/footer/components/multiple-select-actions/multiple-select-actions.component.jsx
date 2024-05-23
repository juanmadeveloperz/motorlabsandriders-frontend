// Components
import { Button } from "@/components/ui/button";

export const MultipleSelectActions = ({ multipleSelectActions, table }) => {
  const selectedRows = table.getFilteredSelectedRowModel().rows.length;

  if (!selectedRows) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 lg:gap-6">
      {multipleSelectActions.map(({ label, icon, onClick }) => (
        <Button
          key={label}
          variant="outline"
          size="icon"
          onClick={() => onClick(table.getFilteredSelectedRowModel().rows)}
        >
          <span className="sr-only">{label}</span>
          {icon}
        </Button>
      ))}
    </div>
  );
};
