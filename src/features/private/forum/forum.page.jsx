import { Link } from "react-router-dom";
// Components
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
import { ThreadForm } from "./components/thread-form/thread-form.component";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// Hooks
import ForumHook from "./hooks/forum.hook";
// Icons
import { LuPlus } from "react-icons/lu";

const ForumPage = () => {
  const {
    categories,
    form,
    handleCreate,
    handleSubmit,
    loading,
    openDialog,
    setOpenDialog,
    threads,
  } = ForumHook();

  const threadsByCategory = threads.reduce((acc, thread) => {
    if (!acc[thread.categoryId]) {
      acc[thread.categoryId] = [];
    }
    acc[thread.categoryId].push(thread);
    return acc;
  }, {});

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Foro</h1>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={handleCreate}>
                <span className="sr-only">Nuevo hilo</span>
                <LuPlus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Nuevo hilo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {categories.map((category) => {
        const categoryThreads = threadsByCategory[category._id] || [];

        if (categoryThreads.length === 0) return null;

        return (
          <div key={category._id} className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-gray-800 border-">
              {category.name}
            </h2>
            <ul className="flex flex-col">
              {categoryThreads.map((thread, index) => {
                const isFirst = index === 0;
                const isLast = index === categoryThreads.length - 1;
                const singlePost = categoryThreads.length === 1;

                let borderRadiusClass = "";
                if (singlePost) {
                  borderRadiusClass = "rounded-lg";
                } else if (isFirst) {
                  borderRadiusClass = "rounded-t-lg";
                } else if (isLast) {
                  borderRadiusClass = "rounded-b-lg";
                }

                return (
                  <li
                    key={thread._id}
                    className={`flex gap-2 border border-gray-300 p-4 ${borderRadiusClass} ${
                      !isLast ? "border-b-0" : ""
                    }`}
                  >
                    <div className="flex flex-col grow gap-2">
                      <h3 className="text-lg md:text-xl font-semibold text-blue-600">
                        <Link to={`${thread._id}`}>{thread.title}</Link>
                      </h3>
                      <p className="text-gray-700 line-clamp-3">
                        {thread.content}
                      </p>
                      <div className="text-sm text-gray-500">
                        Publicado por: {thread.user.name}
                      </div>
                    </div>
                    <div className="shrink-0 self-start text-sm md:text-base px-4 rounded-full bg-blue-100">
                      Replicas: {thread.commentCount}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <DialogWrapper
        {...{
          open: openDialog,
          setOpen: setOpenDialog,
          title: "Crear hilo",
          description: "Rellena los campos para crear un nuevo hilo",
        }}
      >
        <ThreadForm
          {...{
            form,
            handleSubmit,
            label: "Crear",
            loading,
            categories,
          }}
        />
      </DialogWrapper>
    </div>
  );
};

export default ForumPage;
