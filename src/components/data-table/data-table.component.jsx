// Components
import { Body } from "./components/body/body.component";
import { Footer } from "./components/footer/footer.component";
import { Header } from "./components/header/header.component";
// Hooks
import DataTableHook from "./hooks/data-table.hook";

export const DataTable = ({
  columns,
  data,
  handleCreate,
  initialColumnVisibility,
  multipleSelectActions,
}) => {
  const { globalFilter, setGlobalFilter, table } = DataTableHook({
    columns,
    initialColumnVisibility,
    data,
  });

  return (
    <div className="flex flex-col grow gap-4 w-full">
      <Header
        {...{
          globalFilter,
          handleCreate,
          setGlobalFilter,
          table,
        }}
      />
      <Body {...{ columns, table }} />
      <Footer {...{ multipleSelectActions, table }} />
    </div>
  );
};
