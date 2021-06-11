import React, { useEffect, useState } from 'react';
import './styles.scss';

const Game = () => {
  const [win, setWin] = useState('?');
  const [message, setMessage] = useState('Aucune proposition récente');
  const [result, setResult] = useState(null);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [answer, setAnswer] = useState('');
  const [compteur, setCompteur] = useState(1);
  const [color, setColor] = useState('blue');

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
        setColor('green');
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

  return (
    <div className="game-container">
      <h2 className="game-container__title">Propose un nombre</h2>
      <div className={`game-container__message ${color}`}>
        <i class="fas fa-info-circle" id="info"></i> {message}
      </div>
      <div className="game-container__round-container">
        <div className="game-container__round-container__number">
          <span className="position-number">{min}</span>
        </div>
        <i className="fas fa-chevron-left position"></i>
        <div className="game-container__round-container__number">
          <span className="position-number">{win}</span>
        </div>
        <i className="fas fa-chevron-left position"></i>
        <div className="game-container__round-container__number">
          <span className="position-number">{max}</span>
        </div>
      </div>
      {win == result ? (
        <form action="">
          <button class="game-container__form--button">Rejouer</button>
        </form>
      ) : (
        <form
          action=""
          onSubmit={handleSubmit}
          className="game-container__form"
        >
          <input
            className="game-container__form--input"
            type="number"
            name="answer"
            id="inputValue"
            placeholder="Votre proposition"
            value={answer}
            onChange={handleChange}
          />
          <button
            className="game-container__form--button"
            type="button"
            onClick={handleSubmit}
          >
            PROPOSER <i className="fas fa-arrow-circle-right"></i>
          </button>
        </form>
      )}
    </div>
  );
};

export default Game;
