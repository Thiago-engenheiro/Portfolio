import './cardFlutante02.css'

export function CardFlutante02 () {

    return (

    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            
        <ul className='cardFlutante02'>

        <li>

            <p>

                Portugues

            </p>

            <button className='botaoPais'></button>

        </li>

        <li>

            <p>
 
                ingles

            </p>

            <button className='botaoPais02'></button>

        </li>

        </ul>
          </div>
        </div>
        <div className="front">
          <ul className="cardFlutante02">
            <li>
              <p>Português</p>
              <button className="botaoPais"></button>
            </li>
            <li>
              <p>Inglês</p>
              <button className="botaoPais02"></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
 

