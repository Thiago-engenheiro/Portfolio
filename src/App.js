import './App.css'
import BarraLateral from './componentes/barraLateral';
import Blog from './componentes/Blog';
import CardMusica from './componentes/cardMusic';
import CardSobreMim from './componentes/cardSobreMim';
import Certificados from './componentes/Certificados';
import Foto from './componentes/foto';
import CardPortfolio from './componentes/portfolio';
import Titulo from './componentes/Titulo';


function App() {
  return (
    <div className="App">

      <BarraLateral></BarraLateral>

      <section className='conteudo'>

        <main>

          <Titulo></Titulo>

          <section className='cards'>

          <CardSobreMim></CardSobreMim>

          <Foto></Foto>

          <CardPortfolio></CardPortfolio>

          <Certificados></Certificados>

          <CardMusica></CardMusica>

          <Blog></Blog>
    
          </section>

        </main>

      </section>

    </div>
  );
}

export default App;


