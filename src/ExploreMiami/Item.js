import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {
    static propTypes = {
        onTagSelected: PropTypes.func.isRequired,
        onImageSelected: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired
    };

    handleImageClick = () => (
        this.props.onImageSelected(this.props.item)
    );

    handleTagClick = () => (
        this.props.onTagSelected(this.props.item.tag)
    );

    getFavoriteIcon = (isFavourite) => (
        isFavourite === true ? 'images/items/heart-on.png' : 'images/items/heart-off.png'
    );

    getItemImage = (imageName) => {
        return 'images/items/' + imageName + '.webp'
    };

    render() {
        const {picture, tag, title, price, isFavourite} = this.props.item;
        return (
            <div className="column">
                <img className="favorite" src={this.getFavoriteIcon(isFavourite)} onClick={this.handleImageClick} alt={title}/>
                <img className="ui wireframe image" src={this.getItemImage(picture)} alt={title}/>
                <a className="tag" onClick={this.handleTagClick}>{tag} </a>
                <div className="title">{title}</div>
                <div className="price">${price} per person</div>
            </div>
        )
    }
}