import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { CatBreed } from "../../types/cat";

const CatPreview = ({ cat }: { cat: CatBreed }) => {
  return (
    <Card>
      <Card.Img variant="top" src={cat.url} />
      <Card.Body>
        <Link to={`/${cat.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CatPreview;
