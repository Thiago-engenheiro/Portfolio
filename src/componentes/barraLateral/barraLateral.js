import './barraLateral.css'
import '../../ClassesGlobais.css'; 
import { BotaoHambuguer } from '../botaoHambuguer/botaoHamburguer';


export function BarraLateral () {

    return (

        <aside className='barra-lateral'>

            <nav>

                <div>

                    <img className='logotipo' src="/Logotipo/logotipo__modoClaro.png" alt="Logo Thiago Abraao"/>

                </div>

                <ul>

                    <li>

                        <BotaoHambuguer></BotaoHambuguer>

                        <p className='esconder'>

                            Menu

                        </p>

                    </li>

                    <li>

                    <div className='continerIcone'>

                        <img className='icone expandir' src="/iconesMenu/expandir__modoClaro.png" alt="icone expandir"/>

                    </div>

                        <p className='esconder'>

                            Expandir

                        </p>
                      
                    </li>

                    <li>
                        
                    
                    </li>

                    <li>

                    </li>

                    <li>

                    </li>

                </ul>

            </nav>

        </aside>

    )

}