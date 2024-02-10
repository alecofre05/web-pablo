import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './areas.css';
import { Link } from 'react-scroll';

export const Cards = ({ title, text }) => {
  return (
    <Card className="card blue-hover">
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <div className='button-container'>
          <Button id="btn-cards" variant="primary"><Link to="contacto" duration={10} smooth={true}>Consulta</Link></Button>
        </div>
      </Card.Body>
    </Card>
  );
}
