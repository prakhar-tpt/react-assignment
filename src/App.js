import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom' //Keep UI in sync with URL
import Header from './components/Header'
import Filter from './components/Filter'
import Countries from './components/Countries'
import Country from './components/Country'

function App() {
  return (
    <Router>
      <>
        <Header />

        <Route exact path="/">
          <Filter />
          <Countries />
        </Route>
        <Route path="/countries/:name" children={<Country />}></Route>
      </>
    </Router>
  )
}

export default App