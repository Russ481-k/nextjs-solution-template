import { Card, CardBody, CardHeader } from "react-bootstrap";
import SearchForm from "@/components/SearchList/SearchForm";

export default function Page() {
  return (
    <Card>
      <CardHeader>Add new Pokémon</CardHeader>
      <CardBody>
        <SearchForm />
      </CardBody>
    </Card>
  );
}
