import React from 'react'
import HomePage  from "./components/HomePage";
import Trailer from './components/Trailer';
import { Route,Switch } from "react-router-dom"
import ErrorPage from "./components/ErrorPage"

function App() {

  return (
    <div>
       <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/Watch_Trailer" component={Trailer}/>
        <Route component={ErrorPage}/>      
        </Switch>
   </div>
  )
}

export default App;