import React from "react";


export default class FavItem extends React.Component
{
    clickFav = (event)=>{
        this.props.setNewFav(event.target.attributes.item_id.value);
    }

    clickRemoveFav = (event)=>{
        this.props.setNotFav(event.target.attributes.item_id.value);
    }

    render() {
        const { favItem, isFav } = this.props;
        return (
            favItem && (
                <div className="card mb-3" style={{maxWidth: '100%'}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={favItem.thumbnail} className="card-img" alt={favItem.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-header">
                                <h5 className="card-title text-dark">{favItem.title}</h5>
                                {
                                    isFav ? ( <i onClick={this.clickRemoveFav} item_id={favItem.id} className="fas fa-heart fav text-danger" /> ) : (
                                        <i onClick={this.clickFav} item_id={favItem.id} className="fal fa-heart fav text-dark" />
                                    )
                                }
                            </div>
                            <div className="card-body" style={{maxHeight: '100%'}}>
                                <p className="card-text text-dark">{favItem.currency_id+" $"+favItem.price}</p>
                                <p className="card-text text-dark">
                                    {`Unidades vendidas: ${favItem.sold_quantity} / Unidades disponibles: ${favItem.available_quantity}`}
                                </p>
                                <div /* className="buttons" */>
                                    <a href={favItem.permalink} target="_blank" rel="noopener noreferrer">
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