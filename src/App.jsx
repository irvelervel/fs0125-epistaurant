// dopo aver svuotato i CSS che arrivano con Vite, includo
// bootstrap.min.css in App.jsx
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import ReservationForm from './components/ReservationForm'
import Backoffice from './components/Backoffice'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
// per utilizzare Bootstrap in react la cosa migliore è installare 2 pacchetti:
// - bootstrap
// - react-bootstrap
// vanno installati entrambi perchè sono fatti da persone diverse e react-bootstrap
// NON arriva già con bootstrap integrato
// una volta installati, importate il link a bootstrap in App.jsx (riga 3)
// e copiate/incollate gli esempi della documentazione come punto di
// partenza avendo l'accortezza di importare tutti i sotto-componenti
// richiesti (altrimenti avrete errori nella console!)

// --- REACT-ROUTER-DOM ---
// con react-router-dom riusciremo a fornire un'esperienza di navigazione
// anche nella nostra S-P-A (single-page-application)
// quello che faremo sarà sostanzialmente un "rendering-condizionale" di
// determinati componenti sulla base del contenuto della barra degli indirizzi
// questa "navigazione" sarà completamente client-side.

// come si utilizza react-router-dom? ci sono 3 attori in scena:
// - BrowserRouter -> è un "contenitore" per il routing, abilita al suo interno il routing
// - Routes -> un altro contenitore "trasparente" che va inserito circondando le parti dell'app
// che intendiamo rendere "dinamiche", ovvero che risulteranno sensibili al cambio di URL
// gli unici figli possibili di Routes sono le singole Route
// - Route -> crea una rotta per la nostra webapp. Un componente Route necessita di
// 2 prop: path e element.

// per ricapitolare mettiamo BrowserRouter come contenitore di tutto
// poi mettiamo un routes per la parte dinamica e al suo interno tutti
// gli elementi devono essere delle route  che indicano il path e quale
// elemento deve essere montato quando arriviamo a quel determinato path
// thx marco!

function App() {
  return (
    <BrowserRouter>
      <main className="d-flex flex-column min-vh-100">
        {/* ho dichiarato la CustomNavbar in un componente separato, ora lo importo
      e lo uso qui! */}
        {/* <CustomNavbar tema="light" /> */}
        <CustomNavbar tema="dark" />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prenota" element={<ReservationForm />} />
            <Route path="/admin" element={<Backoffice />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
