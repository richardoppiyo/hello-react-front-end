import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './components/greetings';

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
