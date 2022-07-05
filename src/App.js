import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './greetings.js';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
