import RowPerPageSelect from "@/components/Pagination/RowsPerPageSelect";

type Props = {
  perPage: number;
  setPerPage?: (perPage: number) => void;
};

export default function RowsPerPage(props: Props) {
  const { perPage, setPerPage } = props;

  return (
    <div className="col-auto ms-sm-auto mb-3">
      조회 단위 <RowPerPageSelect perPage={perPage} setPerPage={setPerPage} />
    </div>
  );
}
