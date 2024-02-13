"use client";

import { Accordion, Button, Container, Form, InputGroup } from "react-bootstrap";
import React from "react";
import { newResource, Resource } from "@/models/resource";
import { Pokemon } from "@/models/pokemon";
import useSWRAxios, { transformResponseWrapper } from "@/hooks/useSWRAxios";
import Pagination from "@/components/Pagination/Pagination";
import Breadcrumb from "@/components/Breadcrumb";
import CorporateCardSearchList from "./List/CorporateCardSearchList";

export type Props = {
  props: {
    pokemonResource: Resource<Pokemon>;
    page: number;
    perPage: number;
    sort: string;
    order: string;
  };
};

export default function Index(props: Props) {
  const {
    props: { pokemonResource, page, perPage, sort, order },
  } = props;

  const pokemonListURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}pokemons` || "";

  // swr: data -> axios: data -> resource: data
  const {
    data: { data: resource },
  } = useSWRAxios<Resource<Pokemon>>(
    {
      url: pokemonListURL,
      params: {
        _page: page,
        _limit: perPage,
        _sort: sort,
        _order: order,
      },
      transformResponse: transformResponseWrapper((d: Pokemon[], h) => {
        const total = h ? parseInt(h["x-total-count"], 10) : 0;
        return newResource(d, total, page, perPage);
      }),
    },
    {
      data: pokemonResource,
      headers: {
        "x-total-count": pokemonResource.meta.total.toString(),
      },
    }
  );

  return (
    <div>
      <Container fluid>
        <Breadcrumb primaryMenu="회계관리" secondaryMenu="법인카드" thirdMenu="법인카드 조회" />
      </Container>
      <Container fluid>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>법인카드 조회</Accordion.Header>
            <Accordion.Body>
              <InputGroup>
                <InputGroup.Text className="last-row" id="inputGroup-sizing-default">
                  카드번호
                </InputGroup.Text>
                <Form.Control
                  className="last-row"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
                <InputGroup.Text className="last-row" id="inputGroup-sizing-default">
                  구분
                </InputGroup.Text>
                <Form.Control
                  className="last-row"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
                <InputGroup.Text className="last-row" id="inputGroup-sizing-default">
                  은행
                </InputGroup.Text>
                <Form.Control
                  className="last-row"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
                <InputGroup.Text className="last-row" id="inputGroup-sizing-default">
                  상태
                </InputGroup.Text>
                <Form.Control
                  className="last-row"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
                <InputGroup.Text className="last-row" id="inputGroup-sizing-default">
                  하이패스
                </InputGroup.Text>
                <Form.Control
                  className="last-row"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
                <InputGroup.Text className="last-row" id="inputGroup-sizing-default">
                  발급일
                </InputGroup.Text>
                <Form.Control
                  className="last-row"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
                <InputGroup.Text className="last-row" id="inputGroup-sizing-default">
                  비고
                </InputGroup.Text>
                <Form.Control
                  className="last-column last-row"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
                <Button className="button-primary ">조회</Button>
              </InputGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>목록</Accordion.Header>
            <Accordion.Body>
              <div className="p-3">
                <Pagination meta={resource.meta} />
                <CorporateCardSearchList data={resource.data} />
                <Pagination meta={resource.meta} />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
