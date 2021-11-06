import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import "../styles/auth.scss"
import {Button} from "../components/Button"

export function NewRoom(){
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <h2> Crie Salas de Q&amp;A ao-vivo </h2>
        <p>Tire suas dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Let Me Ask" />
          <h2>Crie uma nova Sala</h2>
          <form action="">
            <input type="text" placeholder="Digite o código da Sala" />
            <Button type="submit">
              Criar Sala
            </Button>
            <p> Quer entrar em uma sala Existente? <a href="#">Clique aqui</a></p>
          </form>
          
        </div>
      </main>
    </div>
  )
}