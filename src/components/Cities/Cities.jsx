import { Container } from "../Container/Container.jsx";
import { CitiesS, Form, Input, Search, List } from "./Cities.js";
import { City } from "../City/City.jsx";
export const Cities = () => {
  return (
    <CitiesS>
      <Container>
        <Form>
          <Input placeholder="Search location..." type="text" />
          <Search>Search</Search>
        </Form>
        <List>
          <City />
          <City />
          <City />
          <City />
          <City />
          <City />
        </List>
      </Container>
    </CitiesS>
  );
};
