import React from "react";



export default class ResultItem extends React.Component
{
    clickFav = (event)=>{
        this.props.setNewFav(event.target.attributes.item_id.value);
    }

    clickRemoveFav = (event)=>{
        this.props.setNotFav(event.target.attributes.item_id.value);
    }

    render() {
        const { item, isFav } = this.props;
        return (
            item && (
                <div className="card mb-3" style={{maxWidth: '100%'}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={item.thumbnail} className="card-img" alt={item.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-header">
                                <h5 className="card-title text-dark">{item.title}</h5>
                                {
                                    isFav ? ( <i onClick={this.clickRemoveFav} item_id={item.id} className="fas fa-heart fav text-danger" /> ) : (
                                        <i onClick={this.clickFav} item_id={item.id} className="fal fa-heart fav text-dark" />
                                    )
                                }
                            </div>
                            <div className="card-body" style={{maxHeight: '100%'}}>
                                <p className="card-text text-dark">{item.currency_id+" $"+item.price}</p>
                                <p className="card-text text-dark">
                                    {`Unidades vendidas: ${item.sold_quantity} / Unidades disponibles: ${item.available_quantity}`}
                                </p>
                                <div /* className="buttons" */>
                                    <a href={item.permalink} target="_blank" rel="noopener noreferrer">
                                        <button type="button" className="btn btn-warning">Ver en mercadolibre</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }
}