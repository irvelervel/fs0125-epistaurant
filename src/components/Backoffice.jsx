// questo componente si occuperà di RECUPERARE la lista delle prenotazioni
// esistenti a DB, e di presentarle all'utente.
// avverrà quindi un caricamento all'avvio della pagina, e quando la chiamata
// GET sarà terminata verranno create dinamicamente le righe della nostra lista

import { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Spinner,
  Alert,
} from 'react-bootstrap'

// spoiler: anche oggi avremo bisogno di un componente dotato di STATO
const URL = 'https://striveschool-api.herokuapp.com/api/reservation'

const Backoffice = function () {
  // state = {
  //   reservations: [], // ospiterà eventualmente l'elenco delle prenotazioni
  //   // che arriverà dalla chiamata GET
  //   isLoading: true,
  //   isError: false,
  // }

  const [reservations, setReservations] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const getReservations = () => {
    // questa funzione si occuperà di recuperare le prenotazioni a DB tramite
    // una fetch con metodo 'GET' e salvarle all'interno di "reservations" nello
    // state
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          // ho ottenuto una response positiva dal server!
          return response.json()
        } else {
          throw new Error('Errore nella fetch')
        }
      })
      .then((data) => {
        // oggi data è un array di prenotazioni!
        console.log('PRENOTAZIONI', data)
        // this.setState({
        //   reservations: data,
        //   // nascondo lo spinner
        //   isLoading: false,
        // })
        setReservations(data)
        setIsLoading(false)
        // a questo punto, dopo il setState, render() viene reinvocato
      })
      .catch((err) => {
        console.log('errore', err)
        // this.setState({
        //   isLoading: false,
        //   isError: true,
        // })
        setIsLoading(false)
        setIsError(true)
      })
  }

  // un altro metodo di lifecycle
  // componentDidMount è un metodo riservato per i componenti react a classe
  // componentDidMount = () => {
  //   console.log('SONO COMPONENTDIDMOUNT')
  //   // componentDidMount è un altro metodo di lifecycle
  //   // viene invocato UNA VOLTA SOLA x lifecycle
  //   // viene eseguito SUBITO DOPO la PRIMA invocazione di render()
  //   this.getReservations()
  //   // è un metodo PERFETTO per eseguire operazioni di RECUPERO DATI
  //   // necessarie al montaggio del componente
  // }

  useEffect(() => {
    console.log('SONO COMPONENTDIDMOUNT')
    getReservations()
  }, [])

  const deleteReservation = (idToDelete) => {
    fetch(URL + '/' + idToDelete, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // evviva!
          alert('elemento eliminato')
          getReservations() // aggiorno il DOM
        } else {
          throw new Error('elemento non eliminato')
        }
      })
      .catch((err) => {
        console.log("errore nell'eliminazione", err)
      })
  }

  // STEPS DEL CICLO VITA DI BACKOFFICE.JSX
  // 1) viene inizializzato lo stato del componente, quindi reservations è []
  // 2) viene invocato render() per la prima volta, che disegna la parte "statica" del componente
  // 3) se c'è, viene invocato componentDidMount(), che fa la GET + setState()
  // 4) a causa di quel setState, render() viene re-invocato!
  // 5) la lista viene riempita con i dati appena messi nello stato

  console.log('SONO RENDER')
  // provo a invocare getReservations nel render()
  // il render() è il metodo che si occupa di "disegnare" l'interfaccia
  // this.getReservations()
  // render() è un metodo che viene AUTOMATICAMENTE invocato dal componente a classe
  // render() è un cosiddetto "metodo di lifecycle"
  // react RE-INVOCA render() ogni volta che c'è un cambio di STATE o un cambio di PROPS
  // quindi NON POSSIAMO invocare qui nel render() il nostro metodo getReservations(),
  // perchè al suo interno effettuerebbe un setState() che invocherebbe nuovamente rendere()

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center">Prenotazioni Esistenti</h2>
          <div className="text-center my-3">
            <Button
              variant="warning"
              onClick={() => {
                // this.setState({ isLoading: true })
                setIsLoading(true)
                getReservations()
              }}
            >
              AGGIORNA
            </Button>
          </div>

          {isLoading && (
            <div className="text-center my-3">
              <Spinner variant="primary" animation="border" />
            </div>
          )}

          {isError && (
            <Alert variant="danger" className="text-center">
              <i className="bi bi-patch-exclamation-fill me-2"></i>
              Errore nel recupero dati
              <i className="bi bi-patch-exclamation-fill ms-2"></i>
            </Alert>
          )}

          <ListGroup>
            {reservations.length === 0 && // niente prenotazioni
              !isLoading && ( // caricamento finito
                <ListGroup.Item>
                  <div className="text-center">
                    Nessuna prenotazione salvata!
                  </div>
                </ListGroup.Item>
              )}

            {reservations.map((reservationObject) => {
              return (
                <ListGroup.Item
                  key={reservationObject._id}
                  className="d-flex justify-content-between"
                >
                  <div>
                    {reservationObject.name} per{' '}
                    {reservationObject.numberOfPeople}
                  </div>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteReservation(reservationObject._id)
                    }}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </Button>
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Backoffice
