// Pages
import CategoriesPage from "@/features/private/categories/categories.page";
import CommentsPage from "@/features/private/comments/comments.page";
import ForumPage from "@/features/private/forum/forum.page";
import LogoutPage from "@/features/auth/logout/logout.page";
import ThreadsPage from "@/features/private/threads/threads.page";
import UsersPage from "@/features/private/users/users.page";
import ThreadPage from "@/features/private/thread/thread.page";

export const privateRoutes = [
  {
    path: "/logout",
    element: <LogoutPage />,
  },
  {
    admin: false,
    path: "/foro",
    element: <ForumPage />,
  },
  {
    admin: false,
    path: "/foro/:id",
    element: <ThreadPage />,
  },
  {
    admin: true,
    path: "/hilos",
    element: <ThreadsPage />,
  },
  {
    admin: true,
    path: "/usuarios",
    element: <UsersPage />,
  },
  {
    admin: true,
    path: "/comentarios",
    element: <CommentsPage />,
  },
  {
    admin: true,
    path: "/categorias",
    element: <CategoriesPage />,
  },
];
