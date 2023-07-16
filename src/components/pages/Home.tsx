import { Form, Container, Row, Col } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

import { CatBreed } from "../../types/cat";

const Home = () => {
  const catBreeds = useLoaderData() as CatBreed[];

  return (
    <>
      <Container>
        <Row>
          <h1>Cat Loader</h1>
        </Row>
        <Row>
          <Col lg={4} md={6}>
            <Form.Select aria-label="Default select example">
              <option>Select breed</option>
              {catBreeds?.length &&
                catBreeds.map((breed) => (
                  <option key={breed.id} value={breed.id}>
                    {breed.name}
                  </option>
                ))}
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
