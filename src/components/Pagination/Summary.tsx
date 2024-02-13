import React from "react";

interface SummaryProps {
  total: number;
}

export default function Summary({ total }: SummaryProps) {
  return (
    <div className="col-1 text-center text-sm-start col-sm-auto mb-3">
      조회 결과 : <span className="fw-semibold">{total}</span>개
    </div>
  );
}
