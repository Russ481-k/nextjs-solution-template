"use client";

import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  currentPage: number;
  lastPage: number;
  setPage?: (page: number) => void;
};

export default function Paginate(props: Props) {
  const { currentPage, lastPage, setPage } = props;
  const [pageIndex, setPageIndex] = useState(currentPage - 1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setPageIndex(currentPage - 1);
  }, [currentPage]);

  return (
    <div className="col-auto ms-sm-auto mb-3 overflow-auto color-#3c3796">
      <ReactPaginate
        forcePage={pageIndex}
        pageCount={lastPage}
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        containerClassName="pagination mb-0"
        previousClassName="page-item"
        pageClassName="page-item"
        breakClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        pageLinkClassName="page-link"
        breakLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLabel={<FontAwesomeIcon size="xs" icon={faChevronLeft} />}
        nextLabel={<FontAwesomeIcon size="xs" icon={faChevronRight} />}
        activeClassName="active"
        disabledClassName="disabled"
        onPageChange={(selectedItem) => {
          const page = selectedItem.selected + 1;

          if (setPage) {
            setPage(page);
          }

          const newSearchParams = new URLSearchParams(searchParams);
          newSearchParams.set("page", page.toString());

          router.push(`${pathname}?${newSearchParams}`);
        }}
      />
    </div>
  );
}
