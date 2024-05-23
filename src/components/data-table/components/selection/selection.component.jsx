// Components
import { Checkbox } from "@/components/ui/checkbox";

export const SelectionAllRows = ({ table }) => {
  return (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Seleccionar todas las filas"
    />
  );
};

export const SelectionRow = ({ row }) => {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Seleccionar fila"
    />
  );
};
