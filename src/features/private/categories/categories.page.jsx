// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { CategoryForm } from "./components/category-form/category-form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
// Config
import {
  getColumnsConfig,
  getMultipleSelectActions,
  initialColumnVisibility,
} from "./config/categories.config";
// Hooks
import CategoriesHook from "./hooks/categories.hook";

const CategoriesPage = () => {
  const {
    data,
    form,
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
    setOpenAlert,
    setOpenDialog,
  } = CategoriesHook();

  const columns = getColumnsConfig({ handleDelete, handleEdit });
  const multipleSelectActions = getMultipleSelectActions({
    handleDeleteMultiple,
  });

  return (
    <div className="flex w-full">
      <DataTable
        {...{
          columns,
          data,
          handleCreate,
          initialColumnVisibility,
          multipleSelectActions,
        }}
      />
      <DialogWrapper
        {...{
          open: openDialog,
          setOpen: setOpenDialog,
          title: `${selectedRow ? "Editar" : "Crear"} categoría`,
          description: `Rellena los campos para ${
            selectedRow ? "editar" : "crear"
          } una nueva categoría.`,
        }}
      >
        <CategoryForm
          {...{
            form,
            handleSubmit,
            label: selectedRow ? "Editar" : "Crear",
            loading,
          }}
        />
      </DialogWrapper>
      <AlertDialogWrapper
        {...{
          action: {
            onClick: selectedRows.length
              ? handleSubmitDeleteMultiple
              : handleSubmitDelete,
            label: "Eliminar",
          },
          cancel: {
            label: "Cancelar",
          },
          description: `¿Estás seguro de que quieres eliminar ${
            selectedRows.length > 1
              ? "las categorías seleccionadas"
              : "la categoría seleccionada"
          }?`,
          open: openAlert,
          setOpen: setOpenAlert,
          title: `Eliminar ${
            selectedRows.length > 1 ? "categorías" : "categoría"
          }`,
        }}
      />
    </div>
  );
};

export default CategoriesPage;
