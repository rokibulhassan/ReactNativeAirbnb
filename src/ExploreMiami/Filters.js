import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class Filters extends Component {
    static propTypes = {
        onFilterSelected: PropTypes.func.isRequired
    }

    handleCategoryFilter = () => (
        this.props.onFilterSelected("Homes")
    );

    render() {
        return (
            <div className="ui equal width grid filers">
                <div className="row">
                    <div className="column" key='100'>
                        <div className="filter-image">
                            <img className="ui wireframe image"
                                 src="https://a0.muscache.com/ac/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"/>
                        </div>
                        <div className="filter-title">
                            <a onClick={this.handleCategoryFilter}>Homes</a>
                        </div>
                    </div>
                    <div className="column" key='101'>
                        <div className="filter-image">
                            <img className="ui wireframe image filter"
                                 src="https://a0.muscache.com/ac/pictures/d3811ff7-cc34-471b-8aee-b0d613db0052.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"/>
                        </div>
                        <div className="filter-title">
                            <a onClick={this.handleCategoryFilter}>Experiences</a>
                        </div>
                    </div>
                    <div className="column" key='102'>
                        <div className="filter-image">
                            <img className="ui wireframe image filter"
                                 src="https://a0.muscache.com/ac/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"/>
                        </div>
                        <div className="filter-title">
                            <a onClick={this.handleCategoryFilter}>Restaurants</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}