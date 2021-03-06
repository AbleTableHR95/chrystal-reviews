import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App.jsx';


ReactDOM.render(
  (
    <BrowserRouter>
      <Route exact path="/restaurant/:restaurantId" component={App} />
    </BrowserRouter>
  ), document.getElementById('reviews')
);
