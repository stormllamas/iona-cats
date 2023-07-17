import { useContext } from "react";
import { CatContext } from "../../App";

import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

import { CatBreed } from "../../types/cat";
import usePaginatedCats from "../../customHooks/usePaginatedCats";

const Home = () => {
  const { catStore, updateSelectedBreed } = useContext(CatContext);
  const { selectedBreed } = catStore;

  const catBreeds = useLoaderData() as CatBreed[];

  usePaginatedCats();

  return (
    <Container>
      <Row className="py-2">
        <h1>Cat Loader</h1>
      </Row>
      <Row>
        <Col lg={4} md={3} sm={6}>
          <Form.Select
            aria-label="Select breed"
            value={selectedBreed}
            onChange={(event) => updateSelectedBreed(event.target.value)}
          >
            <option>Select breed</option>
            {catBreeds?.length &&
              catBreeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button disabled={!selectedBreed} variant="success">
            Load More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
