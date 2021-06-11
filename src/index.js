import React from 'react';
import { render } from 'react-dom';

import Fourchette from 'src/components/Fourchette';

const rootReactElement = <Fourchette />;

const target = document.getElementById('root');

render(rootReactElement, target);
