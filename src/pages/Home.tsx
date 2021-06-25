
import { useHistory } from 'react-router-dom'

import {auth, firebase} from '../services/firebase'

import illustration from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'


export function Home() {
  const history = useHistory();

  function handleCreateRoom() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {

      history.push('/rooms/new');
    });
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustration} alt="Illustration questions and answers" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire asdúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="letmeask" />
          <button onClick={handleCreateRoom} className="create-room" >
            <img src={googleIcon} alt="Google logo" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala </Button>
          </form>
        </div>
      </main>
    </div>
  )
}