import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Login from './screens/login/login';
import Form from './screens/login/components/login.screen';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';

function App() {
  return (
    <ThemeProvider 
      theme ={theme}
      >
      <Form/>
    </ThemeProvider>
  );
}

export default App;
