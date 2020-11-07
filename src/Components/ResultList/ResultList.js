import React from "react";

import ResultItem from "./ResultItem/ResultItem";



export default class ResultList extends React.Component
{
    render() {
        const { search, arrayData, arrayIDFavs, setNewFav, setNotFav } = this.props;
        return (
            <>
                {search && ( <div className="subtitle-box"><h2>{`${search[0].toUpperCase()}${search.slice(1)}`}</h2></div> ) }
                {
                    arrayData.length > 0 && arrayIDFavs && (
                        <ul className="list-group">
                        {
                            arrayData.map((item)=>{
                                return (
                                    <li key={item.id} className="list-group-item bg-secondary">
                                        <ResultItem 
                                            item={item} 
                                            setNewFav={setNewFav}
                                            setNotFav={setNotFav}
                                            isFav={arrayIDFavs.indexOf(item.id) > -1 ? true : false}
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