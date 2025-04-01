// questo è un file per un componente React
// ha la lettera maiuscola nel nome e estensione .jsx
// un componente React può essere costruito con una classe o con una funzione:
// i componenti a classe hanno delle potenzialità maggiori rispetto ai componenti a funzione
// ...però qui dobbiamo semplicemente fare una navbar statica!
// ...quindi la faccio con un componente a funzione!

import { Container, Nav, Navbar } from 'react-bootstrap'
// gli import dei componenti vanno inclusi nel file dove vengono adoperati!

const CustomNavbar = function (props) {
  // dentro props c'è la proprietà "tema"
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={props.tema} // "light" o "dark"
      data-bs-theme={props.tema} // "light" o "dark"
    >
      <Container fluid={true}>
        <Navbar.Brand href="#home">Epistaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Menu</Nav.Link>
            <Nav.Link href="#pricing">Prenota</Nav.Link>
            <Nav.Link href="#pricing">Amministrazione</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar

// K I S S -> Keep It Simple, Stupid!
