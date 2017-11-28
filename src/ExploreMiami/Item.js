import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {
    static propTypes = {
        onTagSelected: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired
    }

    handleTagClick = () => (
        this.props.onTagSelected(this.props.item.tag)
    );

    render() {
        console.log('images/items/'+this.props.item.picture+'.wabp')
        const {picture, tag, title, price} = this.props.item;
        return (
            <div className="column">
                <img className="ui wireframe image" src={'images/items/'+picture+'.webp'} alt={title}/>
                <a className="tag" onClick={this.handleTagClick}>{tag} </a>
                <div className="title">{title}</div>
                <div className="price">${price} per person</div>
            </div>
        )
    }
}