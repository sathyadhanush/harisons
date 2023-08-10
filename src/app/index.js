import React from 'react';
import 'src/scss/toast.scss';
import './index.scss';
import ReactDOM from 'react-dom';
import { Component } from './home/Home';
// import { createRoot } from 'react-dom/client';
// import { RouterProvider } from 'react-router-dom';
// import router from 'src/app/router';

document.title = 'Harisons';

ReactDOM.render(<Component />, document.getElementById('root'));

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );
