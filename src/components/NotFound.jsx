import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = function () {
  const navigate = useNavigate() // navigate è una funzione ritornata dall'hook useNavigate

  // provvedo a rimandare l'utente in homepage in caso di 404
  // posso utilizzare dei metodi client-side per una navigazione istantanea:
  // a) utilizzando un <Link> (invece di un tag <a>)
  // b) utilizzando la funzione navigate ritornata da useNavigate() (invece di location.assign)

  return (
    <div className="text-center mt-4">
      <h2>404 - Pasta non trovata</h2>
      <p>
        Vuoi tornare in <Link to="/">HOME</Link>?
      </p>
      <p>
        Puoi anche utilizzare questo{' '}
        <Button
          variant="primary"
          onClick={() => {
            navigate('/') // torno in homepage
          }}
        >
          BUTTON
        </Button>
      </p>
    </div>
  )
}

export default NotFound

// per quanto un link creato semplicemente con una <a /> funzioni, non è il modo
// più efficiente per gestire la navigazione in un'app con react-router-dom, in
// quando un <a> fa una richiesta di un nuovo documento HTML al server
// in react-router-dom è meglio gestire la navigazione utilizzando dei componenti
// <Link></Link>
