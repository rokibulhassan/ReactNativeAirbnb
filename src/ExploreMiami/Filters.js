import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class Filters extends Component {
    static propTypes = {
        onFilter1Selected: PropTypes.func.isRequired
    }

    handleCategoryFilter = (filterName) => (
        this.props.onFilter1Selected(filterName)
    );

    render() {
        return (
            <div className="ui equal width grid filers">
                <div className="row">
                    <div className="column">
                        <div className="filter-image">
                            <img className="ui wireframe image"
                                 src="https://a0.muscache.com/ac/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"/>
                        </div>
                        <div className="filter-title">
                            <a onClick={this.handleCategoryFilter("test")}>Homes</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="filter-image">
                            <img className="ui wireframe image filter"
                                 src="https://a0.muscache.com/ac/pictures/d3811ff7-cc34-471b-8aee-b0d613db0052.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"/>
                        </div>
                        <div className="filter-title">
                            <a onClick={this.handleCategoryFilter("test")}>Experiences</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="filter-image">
                            <img className="ui wireframe image filter"
                                 src="https://a0.muscache.com/ac/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"/>
                        </div>
                        <div className="filter-title">
                            <a onClick={this.handleCategoryFilter("test")}>Restaurants</a>
                        </div>
                    </div>
                    <div className="column"></div>
                    <div className="column"></div>
                </div>
            </div>
        )
    }
}