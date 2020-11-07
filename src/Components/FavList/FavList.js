import React from "react";
import { Link } from "react-router-dom";

import FavItem from "./FavItem/FavItem"

export default class FavList extends React.Component
{
    clickFav = (event)=>{
        this.props.setNewFav(event.target.attributes.item_id.value);
    }
    
    componentDidMount()
        this.props.getFavs();
    }

    render() {
        const { arrayFavs, arrayIDFavs, setNewFav, setNotFav } = this.props;
        return (
            <>
                <div className="subtitle-box">
                    <h2>Favoritos</h2>
                    <Link to="/">
                        <button type="button" className="btn btn-secondary ml-3 mb-2">Seguir buscando</button>
                    </Link>
                </div>
                {
                    
                    arrayFavs && arrayFavs.length > 0 && (
                        <ul className="list-group">
                        {
                            
                            arrayFavs.map((favItem)=>{
                                return (
                                    <li key={favItem.id} className="list-group-item bg-secondary">
                                        <FavItem 
                                            favItem={favItem}
                                            setNewFav={setNewFav}
                                            setNotFav={setNotFav}
                                            isFav={arrayIDFavs.indexOf(favItem.id) > -1 ? true : false}
                                        />
                                    </li>
                                )
                            })
                        }
                        </ul>
                )
                }
            </>
        )
    }
}