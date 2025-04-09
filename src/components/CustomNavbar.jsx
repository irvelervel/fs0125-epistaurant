// questo è un file per un componente React
// ha la lettera maiuscola nel nome e estensione .jsx
// un componente React può essere costruito con una classe o con una funzione:
// i componenti a classe hanno delle potenzialità maggiori rispetto ai componenti a funzione
// ...però qui dobbiamo semplicemente fare una navbar statica!
// ...quindi la faccio con un componente a funzione!

import { Container, Nav, Navbar } from 'react-bootstrap'
// gli import dei componenti vanno inclusi nel file dove vengono adoperati!
import { Link, useLocation } from 'react-router-dom'

const CustomNavbar = function (props) {
  // dentro props c'è la proprietà "tema"

  // useLocation ci torna un OGGETTO pieno di informazioni sul contenuto della barra degli indirizzi
  const location = useLocation()
  console.log('LOCATION', location)

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={props.tema} // "light" o "dark"
      data-bs-theme={props.tema} // "light" o "dark"
    >
      <Container fluid={true}>
        <Link to="/" className="navbar-brand">
          Epistaurant
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className={
                location.pathname === '/menu' ? 'nav-link active' : 'nav-link'
              }
              to="/menu"
            >
              Menu
            </Link>
            <Link
              className={
                location.pathname === '/prenota'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              to="/prenota"
            >
              Prenota
            </Link>
            <Link
              className={
                location.pathname === '/admin' ? 'nav-link active' : 'nav-link'
              }
              to="/admin"
            >
              Amministrazione
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar

// K I S S -> Keep It Simple, Stupid!

// un Nav.Link è un componente di bootstrap che si traduce nell'html in un
// <a class="nav-link">
