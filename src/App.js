import React from "react";
import { BrowserRouter as Router, Switch,  Route, Redirect } from "react-router-dom";

import './App.css';

/* COMPONENTS */
import ResultList from "./Components/ResultList/ResultList";
import SearchBox from './Components/SearchBox/SearchBox';
import FavList from "./Components/FavList/FavList";



export default class App extends React.Component
{
  constructor() {
    super();
    this.state = {
      search: "",
      objectData: {},
      arrayIDFavs: [],
      arrayItemFavs: []
    }
  }

  setData = (value)=>{
    this.setState({search: value});
    fetch(`${"https://api.mercadolibre.com/sites/MLA/search?q="}${encodeURI(value)}`)
    .then((response)=>response.json())
    .then((jsonData)=>{this.setState({objectData: jsonData})})
    .catch((error)=>{/* TODO catch handler */});
    
  }

  setNewFav = (newID)=>{
    let auxArrayIDFavs = [...this.state.arrayIDFavs] || [];
    !auxArrayIDFavs.includes(newID) && ( auxArrayIDFavs.push(newID) );
    this.setState({arrayIDFavs: auxArrayIDFavs});
    localStorage.setItem("arrayFavsID", JSON.stringify(auxArrayIDFavs));
  }

  setNotFav = (removeID)=>{
    let auxArrayIDFavs = [...this.state.arrayIDFavs] || [];
    let index = auxArrayIDFavs.indexOf(removeID);
    index > -1 && ( auxArrayIDFavs.splice(index, 1) );
    this.setState({arrayIDFavs: auxArrayIDFavs});
    localStorage.setItem("arrayFavsID", JSON.stringify(auxArrayIDFavs));
  }

  getFavs = ()=>{
    this.setState({arrayItemFavs: []});
    this.state.arrayIDFavs.forEach((current_id)=>{
      fetch(`https://api.mercadolibre.com/items/${current_id}`)
      .then((response)=>response.json())
      .then((item)=>{
        let auxFavItemsArray = [...this.state.arrayItemFavs];
        auxFavItemsArray.push(item);
        this.setState({arrayItemFavs: auxFavItemsArray});
      }).catch((error)=>{/* TODO catch handler */});
    })
  }
  

  componentDidMount()
  {
    const DEFAULT_SEARCH = "Atari 2600";
    let urlQuery = `${"https://api.mercadolibre.com/sites/MLA/search?q="}${encodeURI(DEFAULT_SEARCH)}`;
    this.setState({search: DEFAULT_SEARCH});

    fetch(urlQuery)
    .then((response)=>response.json())
    .then((jsonData)=>{this.setState({objectData: jsonData})})
    .catch((error)=>{/* TODO catch handler */});


    /* GET favorite items from localStorage. */
    /* TODO backend for replace localStorage as data sourc. */
    const LS_FAVITEMS = localStorage.getItem("arrayFavItems");
    LS_FAVITEMS !== null && LS_FAVITEMS !== undefined && ( this.setState({arrayIDFavs: JSON.parse(LS_FAVITEMS)}) );
  }

  render() {
    return (
      <div className="App">
        <Router>
          <h1>Guayerd - MELI</h1>
          <h3>Una nueva manera de encontrar</h3> 
          <Switch>
            <Route exact path="/">
              <SearchBox setData={this.setData} />
              <ResultList 
                search={this.state.search} 
                arrayData={this.state.objectData.results || []} 
                setNewFav={this.setNewFav}
                setNotFav={this.setNotFav}
                arrayIDFavs={this.state.arrayIDFavs}
              />
            </Route>
            <Route exact path="/favorites">
              <FavList 
                arrayFavs={this.state.arrayItemFavs} 
                getFavs={this.getFavs}
                setNewFav={this.setNewFav}
                setNotFav={this.setNotFav}
                arrayIDFavs={this.state.arrayIDFavs} 
              />
            </Route>
            <Route exact path="/url-not-found"></Route>
            <Route path="*"><Redirect to="/url-not-found" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}