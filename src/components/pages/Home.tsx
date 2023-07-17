import { useCallback, useContext } from "react";
import { CatContext } from "../../App";

import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

import { CatBreed } from "../../types/cat";
import usePaginatedCats from "../../customHooks/usePaginatedCats";

const Home = () => {
  const { catStore, updateSelectedBreed, updateCatsByBreedPage } =
    useContext(CatContext);
  const { selectedBreed, catsByBreedPage } = catStore;

  const catBreeds = useLoaderData() as CatBreed[];

  const {
    loading: catsByBreedLoading,
    data: catsByBreed,
    // error: catsByBreedError,
  } = usePaginatedCats();

  const handleLoadMore = useCallback(() => {
    updateCatsByBreedPage(catsByBreedPage + 1);
  }, [catsByBreedPage, updateCatsByBreedPage]);

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
          {!catsByBreedLoading && !catsByBreed?.length && (
            <h2>No Cats Available</h2>
          )}
          {catsByBreed?.length ? (
            catsByBreed.map((cat) => <p key={cat.id}>{cat.id}</p>)
          ) : (
            <></>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            disabled={!selectedBreed}
            variant="success"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
