import React from "react";
import THSort from "@/components/TableSort/THSort";

type SortableHeaderProps = {
  text: string;
  name: string;
} & Pick<Parameters<typeof THSort>[0], "setSort" | "setOrder">;

export default function SortableHeader({ text, name, setSort, setOrder }: SortableHeaderProps) {
  return (
    <th>
      <THSort name={name} setSort={setSort} setOrder={setOrder}>
        {text}
      </THSort>
    </th>
  );
}
