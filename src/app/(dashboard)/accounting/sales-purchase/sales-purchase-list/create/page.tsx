import SearchForm from "@/components/SearchList/SearchForm";
import { Card, CardBody, CardHeader } from "react-bootstrap";

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
