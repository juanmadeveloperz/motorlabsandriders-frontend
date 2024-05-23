// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { UserForm } from "./components/user-form/user-form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
// Config
import {
  getColumnsConfig,
  getMultipleSelectActions,
  initialColumnVisibility,
} from "./config/users.config";
// Hooks
import UsersHook from "./hooks/users.hook";

const UsersPage = () => {
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
    handleToggleShowPassword,
    loading,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
    setOpenAlert,
    setOpenDialog,
    showPassword,
  } = UsersHook();

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
          title: `${selectedRow ? "Editar" : "Crear"} usuario`,
          description: `Rellena los campos para ${
            selectedRow ? "editar" : "crear"
          } un usuario`,
        }}
      >
        <UserForm
          {...{
            form,
            handleSubmit,
            handleToggleShowPassword,
            label: selectedRow ? "Editar" : "Crear",
            loading,
            showPassword,
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
              ? "los usuarios seleccionados"
              : "el usuario seleccionado"
          }?`,
          open: openAlert,
          setOpen: setOpenAlert,
          title: `Eliminar ${selectedRows.length > 1 ? "usuarios" : "usuario"}`,
        }}
      />
    </div>
  );
};

export default UsersPage;
