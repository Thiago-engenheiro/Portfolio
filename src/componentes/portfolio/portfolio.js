import './portfolio.css'

export function CardPortfolio() {

    return (

        <section className='CardPortfolio'>

        <div className='cardPortfolio__cima'>

            <div className='cardPortfolio__cima__apresentacao'>

                <h2 className='CardPortfolio__cima__titulo'>

                    PORTFOLIO

                </h2>

                <img className='SetaCorInvertida' src="/decoracaoCard/Seta.png" alt=""/>

            </div>

            <div className='continerCelular'>

                <img className='Celular' src="/Projetos/Huawei P30 PRO.png" alt=""/>

            </div>

        </div>

        <div className='cardPortfolio__baixo'>


        <div className='continerTablet'>

            <img className='Tablet' src="/Projetos/iPad Mini (portrait).png" alt=""/>

        </div>

        <div className='continerNotebook'>

            <img className='Notebook' src="/Projetos/laptop.png" alt=""/>

        </div>



        </div>

        </section>


    )





}