import React from 'react';
import ReactDOM from 'react-dom';
import 'src/scss/toast.scss';
import './index.scss';
import Home from './home/Home';
import 'tippy.js/dist/tippy.css';

document.title = 'Harisons';

ReactDOM.render(<Home />, document.getElementById('root'));
