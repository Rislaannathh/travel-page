import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img from '../../photo/photo1.jpeg'
function Cardd() {
  return (
    <Row xs={1} md={2} ms={5} className="g-4 flex">
        <Col className='flex'>
          <Card>
            <Card.Img variant="top" src={img}  />
            <Card.Body>
              <Card.Title> <h3>Mogo</h3></Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>

            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title> <h3>Mogo kk</h3></Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cardd;