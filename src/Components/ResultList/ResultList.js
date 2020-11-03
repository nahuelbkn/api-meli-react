import React from "react";

import ResultItem from "./ResultItem/ResultItem";



export default class ResultList extends React.Component
{
    render() {
        const { search, arrayData } = this.props;
        return (
            arrayData.length > 0 && (
                <>
                    <h2>{search[0].toUpperCase()+search.slice(1)}</h2>
                    <ul className="list-group">
                    {
                        arrayData.map((item)=>{
                            return <li key={item.id} className="list-group-item bg-secondary"><ResultItem item={item}/></li>})
                    }
                    </ul>
                </>
            )
        )
    }
}