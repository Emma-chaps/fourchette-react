import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Game = (props) => {
  const [win, setWin] = useState('?');
  const [result, setResult] = useState(null);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [answer, setAnswer] = useState('');

  const getRandomArbitrary = (minimum, maximum) => {
    const randomNb = Math.round(Math.random() * (maximum - minimum) + minimum);
    setResult(randomNb);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setAnswer(inputValue);
  };

  useEffect(() => {
    getRandomArbitrary(min, max);
  }, []);

  return (
    <div>
      <h2>Propose un nombre</h2>
      <span>message</span>
      <div>
        <span>{min}</span>
        <i className="fas fa-chevron-left"></i>
        <span>{win}</span>
        <i className="fas fa-chevron-left"></i>
        <span>{max}</span>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          name="answer"
          id="inputValue"
          placeholder="Votre proposition"
          value={answer}
          onChange={handleChange}
        ></input>
        <button type="button" onChange={handleChange}>
          PROPOSER <i className="fas fa-arrow-circle-right"></i>
        </button>
      </form>
    </div>
  );
};

Game.propTypes = {};

export default Game;
