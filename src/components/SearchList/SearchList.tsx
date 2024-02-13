import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Link from "next/link";
import { Pokemon } from "@/models/pokemon";
import THSort from "@/components/TableSort/THSort";
import SortableHeader from "@/components/SortableHeader";
import Labels from "@/components/Labels";

type Props = {
  data: Pokemon[];
} & Pick<Parameters<typeof THSort>[0], "setSort" | "setOrder">;

export default function SearchList(props: Props) {
  const { data, setSort, setOrder } = props;

  return (
    <Table responsive bordered hover>
      <thead className="bg-light">
        <tr>
          <SortableHeader
            name="card-number"
            text="카드번호"
            setSort={setSort}
            setOrder={setOrder}
          />
          <th>구분</th>
          <th>은행</th>
          <th>상태</th>
          <th>하이패스</th>
          <th className="text-center">최종 확인일</th>
          <SortableHeader name="date" text="발급일" setSort={setSort} setOrder={setOrder} />
          <th aria-label="Action" />
          <th className="text-center">비고</th>
        </tr>
      </thead>
      <tbody>
        {data.map((pokemon) => (
          <tr key={pokemon.id}>
            <td>{pokemon.id}</td>
            <td>{pokemon.name}</td>
            <td>
              {pokemon.types.map((type) => (
                <span key={type} className="me-2">
                  <Labels type={type} />
                </span>
              ))}
            </td>
            <td className="text-center" style={{ whiteSpace: "pre" }}>
              {pokemon.egg_groups.join("\n")}
            </td>
            <td className="text-end">{pokemon.hp}</td>
            <td className="text-end">{pokemon.attack}</td>
            <td className="text-end">{pokemon.defense}</td>
            <td>
              <Dropdown align="end">
                <DropdownToggle
                  as="button"
                  bsPrefix="btn"
                  className="btn-link rounded-0 text-black-50 shadow-none p-0"
                  id={`action-${pokemon.id}`}
                >
                  <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#/action-1">Info</DropdownItem>
                  <Link href={`data/${pokemon.id}/edit`} passHref legacyBehavior>
                    <DropdownItem>Edit</DropdownItem>
                  </Link>
                  <DropdownItem className="text-danger" href="#/action-3">
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
