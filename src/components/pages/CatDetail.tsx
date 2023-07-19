import { useContext, useEffect, useMemo, useRef } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import { CatLoaderResponse } from "../../types/cat";
import { SetTimeoutType } from "../../types/common";

import { DEFAULT_TOAST_MESSAGE } from "../../constants/appStore";

import { AppContext } from "../../App";

const CatDetail = () => {
  const { addToast } = useContext(AppContext);

  const navigate = useNavigate();
  const catDetail = useLoaderData() as CatLoaderResponse;
  const { breeds, url } = catDetail;

  const catBreedInfo = useMemo(() => {
    if (breeds) {
      return breeds[0];
    }
    return null;
  }, [breeds]);

  // Prevent rerender duplicates
  const catBreedInfoTimeout = useRef<SetTimeoutType>();

  useEffect(() => {
    if (catBreedInfo === null) {
      clearTimeout(catBreedInfoTimeout.current);
      catBreedInfoTimeout.current = setTimeout(() => {
        addToast({
          id: uuidv4(),
          message: DEFAULT_TOAST_MESSAGE,
        });
        navigate("/");
      }, 600);
    }
  }, [catBreedInfo, addToast, navigate]);

  return (
    <Container>
      <Row className="py-2">
        <Col>
          {catBreedInfo && (
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
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CatDetail;
