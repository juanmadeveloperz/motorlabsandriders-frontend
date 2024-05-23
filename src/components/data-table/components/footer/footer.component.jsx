// Components
import { MultipleSelectActions } from "./components/multiple-select-actions/multiple-select-actions.component";
import { PageIndicator } from "./components/page-indicator/page-indicator.component";
import { Pagination } from "./components/pagination/pagination.component";
import { RowsPerPage } from "./components/rows-per-page/rows-per-page.component";
import { SelectedRows } from "./components/selected-rows/selected-rows.component";

export const Footer = ({ multipleSelectActions, table }) => (
  <div className="flex items-center justify-between gap-4 lg:gap-6">
    <div className="flex items-center gap-4 lg:gap-6">
      <SelectedRows {...{ table }} />
      <MultipleSelectActions {...{ multipleSelectActions, table }} />
    </div>
    <div className="flex items-center gap-4 lg:gap-6 ml-auto">
      <RowsPerPage {...{ table }} />
      <PageIndicator {...{ table }} />
      <Pagination {...{ table }} />
    </div>
  </div>
);
