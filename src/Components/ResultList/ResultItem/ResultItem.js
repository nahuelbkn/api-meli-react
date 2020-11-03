import React from "react";



export default class ResultItem extends React.Component
{
    render() {
        const { item } = this.props;
        return (
            item !== undefined && (
                <div className="card mb-3" style={{maxWidth: '100%'}}>

                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={item.thumbnail} className="card-img" alt={item.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" style={{maxHeight: '100%'}}>
                                <h5 className="card-title text-dark">{item.title}</h5>
                                <p className="card-text text-dark">{item.currency_id+" $"+item.price}</p>
                                <p className="card-text text-dark">
                                    {`Unidades vendidas: ${item.sold_quantity}  / Unidades disponibles: ${item.available_quantity}`}
                                </p>
                                <p className="card-text">
                                    <span class="badge badge-primary text-dark">
                                        <a href={item.permalink} target="_blank" rel="noopener noreferrer">
                                            <span className="text-white">Ver en mercadolibre</span>
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }
}