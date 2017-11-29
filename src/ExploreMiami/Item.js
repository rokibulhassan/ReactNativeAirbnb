import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {
    static propTypes = {
        onTagSelected: PropTypes.func.isRequired,
        onFavourite: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired
    }

    handleTagClick = () => (
        this.props.onTagSelected(this.props.item.tag)
    );

    handleImageClick = () => (
        this.props.onTagSelected(this.props.item)
    );

    render() {
        const {picture, tag, title, price} = this.props.item;
        return (
            <div className="column">
                <img className="ui wireframe image" onClick={this.handleImageClick} src={'images/items/'+picture+'.webp'} alt={title}/>
                <a className="tag" onClick={this.handleTagClick}>{tag} </a>
                <div className="title">{title}</div>
                <div className="price">${price} per person</div>
            </div>
        )
    }
}