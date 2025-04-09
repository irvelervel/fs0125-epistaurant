import { Col, Container, Row, Card, Badge } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import pastasciutte from '../data/menu.json'
import { useEffect } from 'react'

const Details = function () {
  const params = useParams()
  // params è un oggetto contenente TUTTI i parametri della rotta colpita con i rispettivi valori
  console.log('PARAMS', params)
  // params.pastaId sarà il valore dell'id della pasta da caricare!
  // potremmo utilizzare nel JSX params.pastaId direttamente come indice dell'array!
  // ...però rendiamo fragile il nostro componente in quanto un utente esperto (e malintenzionato)
  // potrebbe cercare di inserire un valore errato nella barra degli indirizzi portando all'esplosione nucleare
  // del nostro componente!

  // come irrobustiamo la logica? dobbiamo prima di tutto estrarre params.pastaId dai parametri
  // della rotta e verificare che sia un indice valido per l'array pastasciutte. Dopodiché
  // potremo utilizzarlo per mostrare i dettagli richiesti, o portare l'utente alla pagina '*'
  // quando non viene trovata una corrispondenza

  //   "componentDidMount"
  useEffect(() => {
    // verificheremo qui la validità del parametro "pastaId"
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card key={pastasciutte[0].id} className="text-center my-3">
            <Card.Img variant="top" src={pastasciutte[0].image} />
            <Card.Body>
              <Card.Title>{pastasciutte[0].name}</Card.Title>
              <Card.Text>{pastasciutte[0].description}</Card.Text>
              <Card.Text>
                <Badge bg="info fs-6">{pastasciutte[0].price}€</Badge>
              </Card.Text>
              <Link to="/menu" className="btn btn-warning">
                Torna al menu!
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Details
