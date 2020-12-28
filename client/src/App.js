import React from 'react'
import { GlobalStyles } from 'twin.macro'
import styled, {createGlobalStyle} from 'styled-components'
import tw from 'twin.macro'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'

const Container = styled.div`
${tw `
 px-4 pt-4 md:px-12 text-xs md:text-lg
`}
`
const GlobalStyleComponent = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: Open-Sans, Helvetica, Sans-Serif;
  ${tw `bg-gray-100`}
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
}
`;

function App() {
  return (
      <Router>
        <GlobalStyleComponent></GlobalStyleComponent>
        <NavBar></NavBar>
        <Container>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Container>
      </Router>
  );
}

export default App;
