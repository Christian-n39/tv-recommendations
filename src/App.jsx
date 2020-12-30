import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import SingleShow from './pages/SingleShow'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shows/:id' component={SingleShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
