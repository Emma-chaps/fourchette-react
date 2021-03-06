// == Import npm
import React from 'react';
import Game from '../game/Game';

// == Import
import './styles.scss';

// == Composant
const Fourchette = () => (
  <div className="fourchette">
    <h1 className="fourchette__title">Le juste prix</h1>
    <Game />
  </div>
);

// == Export
export default Fourchette;
