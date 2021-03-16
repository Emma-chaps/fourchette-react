import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Game = (props) => {
  const [win, setWin] = useState('?');
  const [message, setMessage] = useState('Aucune proposition récente');
  const [result, setResult] = useState(null);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [answer, setAnswer] = useState('');
  const [compteur, setCompteur] = useState(1);

  const getRandomArbitrary = (minimum, maximum) => {
    const randomNb = Math.round(Math.random() * (maximum - minimum) + minimum);
    setResult(randomNb);
  };

  const playGame = () => {
    if (answer !== '') {
      if (answer < result) {
        setMin(answer);
        setAnswer('');
        setCompteur(compteur + 1);
        setMessage("C'est plus !");
      } else if (answer > result) {
        setMax(answer);
        setAnswer('');
        setCompteur(compteur + 1);
        setMessage("C'est moins !");
      } else {
        setWin(answer);
        setAnswer('');

        if (compteur === 1) {
          setMessage(
            `Bravo ! Tu as trouvé le bon nombre en ${compteur} coup !!`
          );
        } else {
          setMessage(
            `Bravo ! Tu as trouvé le bon nombre en ${compteur} coups !!`
          );
        }
      }
    } else {
      setMessage(`Ceci n'est pas un nombre !`);
    }
  };

  const handleChange = (event) => {
    const inputValue = Number(event.target.value);
    setAnswer(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    playGame();
  };

  useEffect(() => {
    getRandomArbitrary(min, max);
  }, []);

  console.log(answer);
  console.log('result', result);

  return (
    <div>
      <h2>Propose un nombre</h2>
      <span>{message}</span>
      <div>
        <span>{min}</span>
        <i className="fas fa-chevron-left"></i>
        <span>{win}</span>
        <i className="fas fa-chevron-left"></i>
        <span>{max}</span>
      </div>
      {win == result ? (
        <form action="">
          <button>Rejouer</button>
        </form>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <input
            type="number"
            name="answer"
            id="inputValue"
            placeholder="Votre proposition"
            value={answer}
            onChange={handleChange}
          ></input>
          <button type="button" onChange={handleSubmit}>
            PROPOSER <i className="fas fa-arrow-circle-right"></i>
          </button>
        </form>
      )}
    </div>
  );
};

Game.propTypes = {};

export default Game;
