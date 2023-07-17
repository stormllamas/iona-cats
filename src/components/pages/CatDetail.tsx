import { useEffect, useMemo } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { CatLoaderResponse } from "../../types/cat";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CatDetail = () => {
  const catDetail = useLoaderData() as CatLoaderResponse;
  const { breeds, url } = catDetail;

  const catBreedInfo = useMemo(() => breeds[0], [breeds]);

  useEffect(() => {
    console.log("breeds", breeds);
  }, [breeds]);

  return (
    <Container>
      <Row className="py-2">
        <Col>
          <Card>
            <Card.Header>
              <Link to={`/?breed=${catBreedInfo.id}`}>
                <Button variant="primary">Back</Button>
              </Link>
            </Card.Header>
            <Card.Img variant="top" src={url} />
            <Card.Body>
              <Card.Title>
                {catBreedInfo?.name || "No Name Available"}
              </Card.Title>
              <h5>Origin: {catBreedInfo?.origin}</h5>
              <h6>{catBreedInfo?.temperament}</h6>
              <Card.Text>{catBreedInfo?.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CatDetail;
