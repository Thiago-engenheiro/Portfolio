import './barraLateral.css'
import '../../ClassesGlobais.css'; 
import { BotaoHambuguer } from '../botaoHambuguer/botaoHamburguer';
import BotaoExpandir from '../botaoExpandir';


export function BarraLateral () {

    return (

        <aside className='barra-lateral'>

            <nav>

                <div>

                    <img className='logotipo' src="/Logotipo/logotipo__modoEscuro.png" alt="Logo Thiago Abraao"/>

                </div>

                <ul>

                    <li className='lista'>

                        <BotaoHambuguer></BotaoHambuguer>

                        <p className='esconder'>

                            Menu

                        </p>

                    </li>

                    <li className='lista'>

                        <div className='continerIcone'>

                            <BotaoExpandir></BotaoExpandir>

                            <p className='esconder'>

                                Expandir

                            </p>

                        </div>
                      
                    </li>

                    <li className='listaAfastar lista'>

                    <a href="http://localhost:3000/" className='ativo navegacaoLink'>

                        <img className="icone" src="/iconesMenu/HomeBranca.png" alt="Ícone Home"/>

                    </a>

                        <p className='esconder'>

                            Home

                        </p>
                        
                    </li>

                    <li className='lista'>

                        <a href="http://localhost:3000/" className='navegacaoLink'>

                        <img className="icone" src="/iconesMenu/Sobre__mim__modoClaro.png" alt="Ícone Sobre mim"/>

                        </a>

                        <p className='esconder'>

                            Sobre mim

                        </p>

                    </li>

                    <li className='lista '>

                        <a href="http://localhost:3000/" className='navegacaoLink'>

                        <img className="icone" src="/iconesMenu/projetosBranco.png" alt="Ícone Projetos"/>

                        </a>

                        <p className='esconder'>

                            Projetos

                        </p>

                    </li>

                    <li className='lista'>

                        <a href="http://localhost:3000/" className='navegacaoLink'>

                        <img className="icone" src="/iconesMenu/certicado__modoClaro.png" alt="Ícone certificados"/>

                        </a>

                        <p className='esconder'>

                            Certificados

                        </p>

                    </li>

                    <li className='lista'>

                        <a href="http://localhost:3000/" className='navegacaoLink'>

                        <img className="icone" src="/iconesMenu/blogBranco.png" alt="Ícone blog"/>

                        </a>

                        <p className='esconder'>

                            Blog

                        </p>

                    </li>

                    <li className='lista'>

                        <a href="http://localhost:3000/" className='navegacaoLink'>

                        <img className="icone" src="/iconesMenu/faleComigoBranco.png" alt="Ícone fale comigo"/>

                        </a>

                        <p className='esconder'>

                            Fale comigo

                        </p>

                    </li>

                </ul>

            </nav>

        </aside>

    )

}