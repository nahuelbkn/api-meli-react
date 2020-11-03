import React from "react";


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
                <input onChange={this.hadletChange} className="search form-control" placeholder="Ingrese una busqueda"></input>
                <button type="submit" onClick={this.sendData} className="btn btn-secondary mb-2">Buscar</button>
            </form>
        )
    }
}