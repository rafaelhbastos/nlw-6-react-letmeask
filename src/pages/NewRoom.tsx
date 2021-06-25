import {Link} from 'react-router-dom'

import illustration from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'


export function NewRoom() {

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
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to='/'>clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}