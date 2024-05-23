// Components
import { Input } from "@/components/ui/input";
// Constants
import constants from "./constants/filter.constants";

export const Filter = ({ globalFilter, setGlobalFilter }) => (
  <Input
    placeholder={constants.FIELD_FILTER_PROPS.placeholder}
    value={globalFilter ?? ""}
    onChange={(e) => setGlobalFilter(e.target.value)}
    type={constants.FIELD_FILTER_PROPS.type}
  />
);
