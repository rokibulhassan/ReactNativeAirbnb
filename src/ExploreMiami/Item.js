import React, {Component} from 'react'

export default class Item extends Component {

    render() {
        console.log('images/items/'+this.props.item.picture+'.wabp')
        const {picture, tag, title, price} = this.props.item;
        return (
            <div className="column">
                <img className="ui wireframe image" src={'images/items/'+picture+'.webp'} alt={title}/>
                <div className="tag">{tag}</div>
                <div className="title">{title}</div>
                <div className="price">${price} per person</div>
            </div>
        )
    }
}