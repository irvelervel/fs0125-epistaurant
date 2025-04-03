// questo componente si occuperà di RECUPERARE la lista delle prenotazioni
// esistenti a DB, e di presentarle all'utente.
// avverrà quindi un caricamento all'avvio della pagina, e quando la chiamata
// GET sarà terminata verranno create dinamicamente le righe della nostra lista

import { Component } from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

// spoiler: anche oggi avremo bisogno di un componente dotato di STATO

class Backoffice extends Component {
  state = {
    reservations: [], // ospiterà eventualmente l'elenco delle prenotazioni
    // che arriverà dalla chiamata GET
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs={12} md={8} lg={6}>
            <h2 className="text-center">Prenotazioni Esistenti</h2>
            <ListGroup>
              {this.state.reservations.map((reservationObject) => {
                return (
                  <ListGroup.Item key={reservationObject._id}>
                    {reservationObject.name}
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Backoffice
