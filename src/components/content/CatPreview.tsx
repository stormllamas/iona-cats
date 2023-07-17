import { Card, Button } from "react-bootstrap";
import { CatBreed } from "../../types/cat";
import { Link } from "react-router-dom";

const CatPreview = ({ cat }: { cat: CatBreed }) => {
  return (
    <Card>
      <Card.Img variant="top" src={cat.url} />
      <Card.Body>
        <Link to={`/cats/${cat.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CatPreview;
