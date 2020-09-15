import React from 'react';
import Header from './Components/Header';
import { useSelector } from 'react-redux';
import Landing from "./Routes/Landing";
import Loading from "./Components/Loading";
import { Container } from '@material-ui/core';
import './App.css';

function App() {
  const state = useSelector(state => state.MovieReducer);
  const {loading} = state;
  return (
    <div className="App">
    <Header />
    {loading && <Loading />} 
    <Container fluid>
     <Landing />
     </Container>
     </div> )
}

export default App;