// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { CommentForm } from "./components/comment-form/comment-form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
// Config
import {
  getColumnsConfig,
  getMultipleSelectActions,
  initialColumnVisibility,
} from "./config/comments.config";
// Hooks
import CommentsHook from "./hooks/comments.hook";

const CommentsPage = () => {
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
    threads,
    users,
  } = CommentsHook();

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
          title: `${selectedRow ? "Editar" : "Crear"} comentario`,
          description: `Rellena los campos para ${
            selectedRow ? "editar" : "crear"
          } un nuevo comentario.`,
        }}
      >
        <CommentForm
          {...{
            form,
            handleSubmit,
            label: selectedRow ? "Editar" : "Crear",
            loading,
            threads,
            users,
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
              ? "los comentarios seleccionados"
              : "el comentario seleccionado"
          }?`,
          open: openAlert,
          setOpen: setOpenAlert,
          title: `Eliminar ${
            selectedRows.length > 1 ? "comentarios" : "comentario"
          }`,
        }}
      />
    </div>
  );
};

export default CommentsPage;
