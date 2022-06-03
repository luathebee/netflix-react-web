import React from 'react';
import './App.css';
import Form from './screens/login/components/login.screen';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';
import { GlobalStyles } from './themes/main/global.styles';

function App() {
  return (
    <>
    <GlobalStyles/>
    <ThemeProvider 
      theme ={theme}
      >
      <Form/>
    </ThemeProvider>
    </>
  );
}

export default App;
