import { TextoAnimado} from '../textoAnimado/textoAnimado';
import './cardSobreMim.css'

export function CardSobreMim () {

    return (

        <section className='CardSobreMim'>

            <div className='CardSobreMim__esquerdo'>

                <img className='DecoracaoFlor' src="/decoracaoCard/Vector.png" alt=""/>

                <div className='titulos'>

                    <h2 className='titulo__engenheiro'>

                        Engenheiro de software

                    </h2>

                    <p className='frase__auxiliar'>

                        Certificado em

                    </p>

                    <p>
                        
                        <TextoAnimado></TextoAnimado>
                        
                    </p>

                    <h3 className='subtitulo'>

                        Especializações que vão além do código

                    </h3>

                </div>

                <p>

                </p>

            </div>

            <div className='CardSobreMim__direto'>

                <h2 className='CardSobreMim__direto__titulo'>

                    SOBRE MIM

                </h2>

               <img className='Seta' src="/decoracaoCard/Seta.png" alt=""/>

            </div>

        </section>

    );
};
 
