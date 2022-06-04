import React from 'react';
import './App.css';
import Login from './screens/login/login';
import Form from './screens/login/components/login.screen';
import MoviesList from './screens/movies-list/movies-list';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';
import { GlobalStyles } from './themes/main/global.styles';
import { Route, Routes } from 'react-router-dom';
import { LOGIN_URL } from './screens/login/components/login.type';
import { MOVIES_LIST_URL } from './screens/movies-list/movies-list.type';


function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider 
        theme ={theme}
        >
        <Routes>
          <Route element={<Form/>} path={LOGIN_URL} ></Route>
          <Route element={<MoviesList/>} path={MOVIES_LIST_URL}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
