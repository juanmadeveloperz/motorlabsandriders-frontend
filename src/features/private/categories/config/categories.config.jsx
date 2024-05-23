// Components
import { Sorting } from "@/components/data-table/components/sorting/sorting.component";
import {
  SelectionAllRows,
  SelectionRow,
} from "@/components/data-table/components/selection/selection.component";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Icons
import { LuMoreHorizontal } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";

export const getColumnsConfig = ({ handleDelete, handleEdit }) => {
  return [
    {
      id: "selection",
      cell: ({ row }) => <SelectionRow row={row} />,
      header: ({ table }) => <SelectionAllRows table={table} />,
    },
    {
      accessorKey: "name",
      header: ({ column }) => <Sorting column={column} title="Nombre" />,
      meta: "Nombre",
    },
    {
      accessorKey: "description",
      header: ({ column }) => <Sorting column={column} title="Descripción" />,
      meta: "Descripción",
    },
    {
      header: "Acciones",
      id: "actions",
      cell: ({ row }) => {
        return (
          <div className="flex justify-center items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <LuMoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleEdit(row.original)}>
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDelete(row.original)}>
                  Eliminar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];
};

export const getMultipleSelectActions = ({ handleDeleteMultiple }) => {
  return [
    {
      label: "Eliminar",
      icon: <LuTrash2 className="h-5 w-5" />,
      onClick: (rows) => {
        handleDeleteMultiple(rows.map((row) => row.original));
      },
    },
  ];
};

export const initialColumnVisibility = {};
