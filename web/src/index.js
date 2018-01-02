import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './utilities/global.js';
import 'flexboxgrid';
import '@fortawesome/fontawesome';

render(<App />, document.getElementById('root'));

registerServiceWorker();
