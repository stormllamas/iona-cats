import { ChangeEvent, useCallback, useContext, useEffect } from "react";
import { CatContext } from "../../App";

import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useLoaderData, useSearchParams } from "react-router-dom";

import { CatBreed } from "../../types/cat";

import CatPreview from "../content/CatPreview";

import usePaginatedCats from "../../customHooks/usePaginatedCats";

const Home = () => {
  const { catStore, updateSelectedBreed, updateCatsByBreedPage } =
    useContext(CatContext);
  const { selectedBreed, catsByBreedPage, endOfCatsByBreedPage } = catStore;

  const catBreeds = useLoaderData() as CatBreed[];

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const queryStringBreed = searchParams.get("breed");
    if (queryStringBreed && updateSelectedBreed) {
      updateSelectedBreed(queryStringBreed);
    }
  }, [searchParams]);

  const {
    loading: catsByBreedLoading,
    data: catsByBreed,
    setData,
  } = usePaginatedCats();

  const handleBreedSelect = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setData([]);
      updateSelectedBreed(event.target.value);
    },
    [updateSelectedBreed, setData]
  );

  const handleLoadMore = useCallback(() => {
    updateCatsByBreedPage(catsByBreedPage + 1);
  }, [catsByBreedPage, updateCatsByBreedPage]);

  return (
    <Container>
      <Row className="py-2">
        <Col>
          <h1>Cat Loader</h1>
        </Col>
      </Row>
      <Row className="py-2 mb-4">
        <Col lg={4} md={3} sm={6}>
          <Form.Select
            aria-label="Select breed"
            value={selectedBreed}
            onChange={handleBreedSelect}
            disabled={catsByBreedLoading}
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
      <Row className="py-2 mb-4">
        {!catsByBreedLoading && !catsByBreed?.length && (
          <Col>
            <h2>No Cats Available</h2>
          </Col>
        )}
        {catsByBreed?.length ? (
          catsByBreed.map((cat) => (
            <Col key={cat.id} md={3} sm={6}>
              <CatPreview cat={cat} />
            </Col>
          ))
        ) : (
          <></>
        )}
      </Row>
      {!endOfCatsByBreedPage && (
        <Row>
          <Col>
            <Button
              disabled={!selectedBreed || catsByBreedLoading}
              variant="success"
              onClick={handleLoadMore}
            >
              {catsByBreedLoading ? "Loading cats..." : "Load More"}
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;
