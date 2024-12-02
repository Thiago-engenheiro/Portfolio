import './App.css'
import BarraLateral from './componentes/barraLateral';
import CardSobreMim from './componentes/cardSobreMim';
import Foto from './componentes/foto';
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
    
          </section>

        </main>

      </section>

    </div>
  );
}

export default App;


