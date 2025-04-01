import { Col, Container, Row, Carousel } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'

const Home = function () {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <h1>Epistaurant</h1>
          <h2>Le migliori pastasciutte del web!</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <Carousel>
            {pastasciutte.map((pasta) => {
              return (
                // ogni volta che fate un .map() in JSX dovete assegnare
                // all'elemento ritornato una prop chiamata "key", e il suo
                // valore deve essere UNICO
                <Carousel.Item key={pasta.id}>
                  <img
                    src={pasta.image}
                    className="w-100"
                    alt={'immagine di ' + pasta.name}
                  />
                  <Carousel.Caption>
                    <h3>{pasta.name}</h3>
                    <p>{pasta.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
