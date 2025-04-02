import { Component } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
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
    // STATO INIZIALE DEL COMPONENTE
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: '1',
      dateTime: '',
      smoking: false,
      specialRequests: '',
    },
  }

  // non si può fare -> this.state.reservation.specialRequests = "qualcosaltro"
  // perchè lo stato è in SOLA LETTURA (non si può modificare direttamente)

  // ora dobbiamo collegare i valori delle proprietà inserite nello stato "reservation"
  // gli INPUT CONTROLLATI sono gestiti da un "two-way databinding"

  // ora che tutti i campi sono collegati a "doppia via" con lo stato,
  // posso occuparmi della logica di submit del form
  handleSubmit = (e) => {
    // handlers vari su clicks etc. vanno creati con le funzioni freccia
    // per evitare uno scorretto binding del "this"
    e.preventDefault() // stoppiamo il comportamento di default del form
    console.log('ORA FACCIO LA FETCH!')
    // faccio la fetch, con metodo POST
    fetch('https://striveschool-api.herokuapp.com/api/reservation', {
      method: 'POST',
      body: JSON.stringify(this.state.reservation),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          alert('PRENOTAZIONE SALVATA!')
          // sarebbe il caso di svuotare il form...
          // per farlo ripristino lo state alla forma iniziale
          this.setState({
            reservation: {
              name: '',
              phone: '',
              numberOfPeople: '1',
              dateTime: '',
              smoking: false,
              specialRequests: '',
            },
          })
        } else {
          throw new Error('La chiamata non ha restituito esito positivo')
        }
      })
      .catch((e) => {
        console.log(
          'si è verificato un errore nel salvataggio della prenotazione',
          e
        )
      })
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h2 className="my-3 text-center">Prenota il tuo tavolo ORA!</h2>
            <Form className="mb-5" onSubmit={this.handleSubmit}>
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
                        ...this.state.reservation,
                        // questa riga fa in modo che il mio NUOVO oggetto reservation
                        // non parta da oggetto vuoto, ma riparta dall'attuale
                        // contenuto dello state! Sopra questo contenuto esistente,
                        // vado ad aggiungere l'attuale contenuto di quello che ho scritto
                        // nel campo in cui l'ho scritto
                        name: e.target.value, // la lettera che ho scritto
                        // poichè in un oggetto non posso avere due volte la stess proprietà,
                        // di fatto vado a sovrascrivere name
                      },
                    })
                  }}
                />
              </Form.Group>

              {/* RENDERING CONDIZIONALE */}
              {/* metodo dello "SHORT CIRCUIT" */}
              {this.state.reservation.name === 'Al Bano' && (
                <Alert variant="info">
                  Un bicchiere di vino con un panino!
                </Alert>
              )}

              <Form.Group className="mb-3">
                <Form.Label>N. di telefono</Form.Label>
                <Form.Control
                  type="tel"
                  required
                  value={this.state.reservation.phone}
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        phone: e.target.value,
                      },
                    })
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quanti siete?</Form.Label>
                <Form.Select
                  aria-label="numero di persone"
                  value={this.state.reservation.numberOfPeople}
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        numberOfPeople: e.target.value,
                      },
                    })
                  }}
                >
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
                <Form.Control
                  type="datetime-local"
                  required
                  value={this.state.reservation.dateTime}
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        dateTime: e.target.value,
                      },
                    })
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Tavolo fumatori?"
                  // la proprietà "value" dei campi checkbox NON torna true/false
                  // ma "on"/"off" (come stringhe)
                  // poichè le API si aspettano un valore booleano per la proprietà
                  // "smoking" e quindi devo interagire con il valore di "checked"
                  // a livello di interfaccia
                  checked={this.state.reservation.smoking}
                  onChange={(e) =>
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        smoking: e.target.checked,
                      },
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Allergie, malanni, bambini?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={this.state.reservation.specialRequests}
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        // dovrei in questo nuovo reservation portarmi dietro
                        // anche tutte le altre proprietà che non ho toccato!
                        // ovvero:

                        // name: this.state.reservation.name,
                        // phone: this.state.reservation.phone,
                        // smoking: this.state.reservation.smoking,
                        // dateTime: this.state.reservation.dateTime,
                        // numberOfPeople: this.state.reservation.numberOfPeople,
                        // specialeRequests: this.state.reservation.specialRequests

                        // ma posso farlo in velocità utilizzando lo spread operator,
                        // che crea nel mio nuovo oggetto "guscio" una copia
                        // di tutti gli attuali valori di this.state.reservation
                        ...this.state.reservation,
                        specialRequests: e.target.value,
                      },
                    })
                  }}
                />
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
