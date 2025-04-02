import { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// stefano va dal backender *knock knock* e gli chiede come vuole l'oggetto
// l'oggetto da mandare alle API dev'essere fatto così:
// - name <-- nome del prenotante, stringa
// - phone <-- contatto telefonico, stringa
// - numberOfPeople <-- numero di persone, stringa/numero
// - smoking <-- tavolo fumatori, booleano
// - dateTime <-- data e ora della prenotazione, stringa
// - specialRequests <-- ho un cane, mi serve un seggiolone, allergie etc. etc. stringa

class ReservationForm extends Component {
  // in React, TUTTI i form che scriverete dovranno essere "CONTROLLATI" (controlled inputs)
  // un input controllato è un input che si interfaccia in real-time con lo STATO del COMPONENTE
  // abbiamo quindi bisogno di uno STATO nel componente, che memorizzerà continuamente
  // i valori inseriti nei campi del form!

  state = {
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: '1',
      dateTime: '',
      smoking: false,
      specialRequests: '',
    },
  }

  // ora dobbiamo collegare i valori delle proprietà inserite nello stato "reservation"
  // gli INPUT CONTROLLATI sono gestiti da un "two-way databinding"

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h2 className="my-3 text-center">Prenota il tuo tavolo ORA!</h2>
            <Form className="mb-5">
              <Form.Group className="mb-3">
                <Form.Label>Il tuo nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mario Rossi"
                  required
                  // colleghiamo il campo nome allo stato del componente
                  // abbiamo bisogno di fare ENTRAMBE le "frecce"
                  //   freccia n.1: collego il valore dell'input al valore dello stato
                  value={this.state.reservation.name}
                  //   freccia n.2: collego la modifica dell'input alla modifica dello stato
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        name: e.target.value, // la lettera che ho scritto
                      },
                    })
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>N. di telefono</Form.Label>
                <Form.Control type="tel" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quanti siete?</Form.Label>
                <Form.Select aria-label="numero di persone">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quando venite?</Form.Label>
                <Form.Control type="datetime-local" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Tavolo fumatori?" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Allergie, malanni, bambini?</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="success" type="submit">
                Prenota!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ReservationForm
