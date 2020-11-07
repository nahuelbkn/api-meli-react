import React from "react";
import { Link } from "react-router-dom";
export default class SearchBox extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    hadletChange = (event)=>{
        event.preventDefault();
        this.setState({search: event.target.value});
    }

    sendData = (event)=>{
        event.preventDefault();
        this.state.search !== "" && (this.props.setData(this.state.search))

    }

    render() {
        return (
            <form className="search">
                <div className="input-group">
                    <input onChange={this.hadletChange} className="search form-control" placeholder="Ingrese una busqueda"></input>
                    <button type="submit" onClick={this.sendData} className="btn btn-secondary mb-2">Buscar</button>
                    <Link to="/favorites">
                        <button type="button" className="btn btn-secondary ml-3 mb-2">Ver Favoritos</button>
                    </Link>
                </div>
           </form>
        )
    }
}