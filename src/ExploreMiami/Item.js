import React, {Component} from 'react'

export default class Item extends Component {

    render() {
        const {imageUrl, tag, title, price} = this.props.item
        return (
            <div className="column">
                <img className="ui wireframe image" src={imageUrl} alt="Item"/>
                <div className="tag">{tag}</div>
                <div className="title">{title}</div>
                <div className="price">${price} per person</div>
            </div>
        )
    }
}