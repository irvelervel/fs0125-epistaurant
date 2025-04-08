import { Col, Container, Row, Carousel, ListGroup } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'
import { useState } from 'react'

const Home = function () {
  // ogni componente React, volendo, può possedere uno "state", cioè
  // un oggetto di stato
  // questo oggetto di stato viene solitamente utilizzato per "memorizzare" o
  // "rendere consapevole" il componente di una determinata cosa/situazione/dato etc.

  // lo stato di un componente è accessibile solo dal componente stesso!

  // per avere uno stato interno, un componente deve essere definito come CLASSE

  const [activePasta, setActivePasta] = useState(pastasciutte[0])

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
          <Carousel
            onSlide={(i) => {
              // cerco di intercettare il cambio slide
              // console.log('funziona??', i)
              // i è l'indice della slide che sta arrivando
              // ma di conseguenza, è anche l'indice della pasta che sta per comparire
              // perchè io genero le slides a partire dalle paste!
              // console.log(pastasciutte[i])
              // dovrei settare pastasciutte[i] come nuova activePasta
              // come si cambia lo stato di un componente?
              // purtroppo lo stato di un componente è READ-ONLY
              // c'è un metodo apposito per cambiare lo stato di un componente
              // this.setState({
              //   activePasta: pastasciutte[i],
              // })
              setActivePasta(pastasciutte[i])
            }}
          >
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
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <ListGroup>
            {activePasta.comments.map((recensione) => {
              return (
                <ListGroup.Item key={recensione.id}>
                  {recensione.comment} - {recensione.rating}/5
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
