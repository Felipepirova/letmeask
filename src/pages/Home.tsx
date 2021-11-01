import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import "../styles/auth.scss"

export function Home(){
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
          <button className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Cria sua Sala com o Google
          </button>
          <div className="separator"> Ou entre em uma Sala</div>
          <form action="">
            <input type="text" placeholder="Digite o código da Sala" />
            <button type="submit">Entrar na Sala</button>
          </form>
        </div>
      </main>
    </div>
  )
}