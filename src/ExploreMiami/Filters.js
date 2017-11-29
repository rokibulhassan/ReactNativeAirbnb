import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Filters extends Component {
    static propTypes = {
        onFilterSelected: PropTypes.func.isRequired
    }

    handleCategoryFilter = () => (
        this.props.onFilterSelected(this.props.category.title)
    );

    render() {
        const {title, imageUrl} = this.props.category;
        return (
            <div className="column">
                <div className="filter-image">
                    <img className="ui wireframe image" src={imageUrl}/>
                </div>
                <div className="filter-title">
                    <a onClick={this.handleCategoryFilter}>{title}</a>
                </div>
            </div>
        )
    }
}