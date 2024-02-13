import React from "react";
import { Resource } from "@/models/resource";
import Paginate from "@/components/Pagination/Paginate";
import RowsPerPage from "@/components/Pagination/RowsPerPage";
import Summary from "@/components/Pagination/Summary";

type Props = {
  meta: Resource<unknown>["meta"];
  setPerPage?: (perPage: number) => void;
} & Pick<Parameters<typeof Paginate>[0], "setPage"> &
  Pick<Parameters<typeof RowsPerPage>[0], "setPerPage">;

export default function Pagination(props: Props) {
  const {
    meta: { total, per_page: perPage, last_page: lastPage, current_page: currentPage },
    setPerPage,
    setPage,
  } = props;

  return (
    <div className="row align-items-center justify-content-center">
      <Summary total={total} />
      <Paginate currentPage={currentPage} lastPage={lastPage} setPage={setPage} />
      <RowsPerPage perPage={perPage} setPerPage={setPerPage} />
    </div>
  );
}
