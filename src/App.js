import React from "react";
import { BrowserRouter as Router, Switch,  Route, Redirect } from "react-router-dom";

import './App.css';
import ResultList from "./Components/ResultList/ResultList";
import SearchBox from './Components/SearchBox/SearchBox';


export default class App extends React.Component
{
  constructor() {
    super();
    this.state = {
      search: "",
      objectData: {}
    }
  }

  componentDidMount()
  {
    let DEFAULT_SEARCH = "Atari 2600";
    let urlQuery = `${"https://api.mercadolibre.com/sites/MLA/search?q="}${encodeURI(DEFAULT_SEARCH)}`;
    this.setState({search: DEFAULT_SEARCH});

    fetch(urlQuery)
    .then((response)=>response.json())
    .then((jsonData)=>{this.setState({objectData: jsonData})})
    .catch((error)=>{/* TODO catch handler */});
    
  }

  setData = (value)=>{
    this.setState({search: value});
    fetch(`${"https://api.mercadolibre.com/sites/MLA/search?q="}${encodeURI(value)}`)
    .then((response)=>response.json())
    .then((jsonData)=>{this.setState({objectData: jsonData})})
    .catch((error)=>{/* TODO catch handler */});
    
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <h1>Guayerd - MELI</h1>
              <h3>Una nueva manera de encontrar</h3> 
              <SearchBox setData={this.setData}></SearchBox>
              <ResultList search={this.state.search} arrayData={this.state.objectData.results || []} />
            </Route>
            <Route exact path="/url-not-found"></Route>
            <Route path="*"><Redirect to="/url-not-found" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}