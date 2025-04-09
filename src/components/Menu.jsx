// questo componente farà nuovamente un .map() del json delle paste
// ma visualizzerà i contenuti in una serie di card incolonnate

import { Link } from 'react-router-dom'
import pastasciutte from '../data/menu.json'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'

const Menu = function () {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          {pastasciutte.map((pasta) => {
            return (
              <Card key={pasta.id} className="text-center my-3">
                <Card.Img variant="top" src={pasta.image} />
                <Card.Body>
                  <Card.Title>{pasta.name}</Card.Title>
                  <Card.Text>{pasta.description}</Card.Text>
                  <Card.Text>
                    <Badge bg="info fs-6">{pasta.price}€</Badge>
                  </Card.Text>
                  <Link to={'/details/' + pasta.id} className="btn btn-warning">
                    Vai ai dettagli!
                  </Link>
                </Card.Body>
              </Card>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default Menu
