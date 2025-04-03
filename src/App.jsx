// dopo aver svuotato i CSS che arrivano con Vite, includo
// bootstrap.min.css in App.jsx
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import ReservationForm from './components/ReservationForm'
import Backoffice from './components/Backoffice'

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
    <main>
      {/* ho dichiarato la CustomNavbar in un componente separato, ora lo importo
      e lo uso qui! */}
      {/* <CustomNavbar tema="light" /> */}
      <CustomNavbar tema="dark" />
      {/* qui metterò il componente del "backoffice" */}
      <Backoffice />
      {/* qui metterò il componente del FORM */}
      <ReservationForm />
      {/* qui ci metterò Home */}
      <Home />
    </main>
  )
}

export default App
