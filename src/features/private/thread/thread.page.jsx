// Components
import { Loading } from "@/components/loading/loading.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
import { CommentForm } from "./components/comment-form/comment-form.component";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// Hooks
import ThreadHook from "./hooks/thread.hook";
// Icons
import { LuPlus } from "react-icons/lu";

const ForumPage = () => {
  const {
    comments,
    form,
    handleCreate,
    handleSubmit,
    loading,
    openDialog,
    setOpenDialog,
    thread,
  } = ThreadHook();

  if (!thread) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex justify-between">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={handleCreate}>
                <span className="sr-only">Nuevo comentario</span>
                <LuPlus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Nuevo comentario</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800">{thread.title}</h2>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-600">
              Categoría: {thread.category.name}
            </span>
            <span className="text-sm text-gray-600">
              Publicado por: {thread.user.name}
            </span>
            <span className="text-sm text-gray-600">
              Comentarios: {thread.commentCount}
            </span>
            <span className="text-sm text-gray-600">
              Creado: {new Date(thread.createdAt).toLocaleString()}
            </span>
          </div>
          <p className="text-gray-700">{thread.content}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-gray-800">Comments</h3>
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg"
            >
              <span className="text-sm text-gray-600">
                Comentado por: {comment.user.name}
              </span>
              <span className="text-sm text-gray-600">
                Creado: {new Date(comment.createdAt).toLocaleString()}
              </span>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>

      <DialogWrapper
        {...{
          open: openDialog,
          setOpen: setOpenDialog,
          title: "Responder al hilo",
          description: "Rellena los campos para responder al hilo",
        }}
      >
        <CommentForm
          {...{
            form,
            handleSubmit,
            label: "Crear",
            loading,
          }}
        />
      </DialogWrapper>
    </div>
  );
};

export default ForumPage;
