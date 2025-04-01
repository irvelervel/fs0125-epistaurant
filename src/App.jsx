// dopo aver svuotato i CSS che arrivano con Vite, includo
// bootstrap.min.css in App.jsx
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

// per utilizzare Bootstrap in react la cosa migliore è installare 2 pacchetti:
// - bootstrap
// - react-bootstrap
// vanno installati entrambi perchè sono fatti da persone diverse e react-bootstrap
// NON arriva già con bootstrap integrato
// una volta installati, importate il link a bootstrap in App.jsx (riga 3)
// e copiate/incollate gli esempi della documentazione come punto di
// partenza avendo l'accortezza di importare tutti i sotto-componenti
// richiesti (altrimenti avrete errori nella console!)

function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default App
