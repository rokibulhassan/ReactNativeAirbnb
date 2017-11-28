import React, {Component} from 'react'
import './style.css'
import dataList from './data.js'


export default class ExploreMiami extends Component {
    state = {
        dataList: []
    }

    componentDidMount = () => {
        this.setState({
            dataList: dataList
        })

        console.log(dataList)
    }

    render() {
        return (
            <div className="main ui container">
                <h1 className="ui dividing header">Explore Miami</h1>
                <div className="ui four column grid">
                    <div className="column">
                        <img className="ui wireframe image" src="https://a0.muscache.com/im/pictures/7bd0b8ea-34c8-4633-a7d4-9252107db617.jpg?aki_policy=large" alt="Item"/>
                        <div className="category">Food Tasting</div>
                        <div className="description">Miami Beach: Taste Your Way Through The Art Deco District</div>
                        <div className="price">$59 per person</div>
                    </div>
                    <div className="column">
                        <img className="ui wireframe image" src="https://a0.muscache.com/im/pictures/7bd0b8ea-34c8-4633-a7d4-9252107db617.jpg?aki_policy=large" alt="Item"/>
                        <div className="category">Food Tasting</div>
                        <div className="description">Miami Beach: Taste Your Way Through The Art Deco District</div>
                        <div className="price">$59 per person</div>
                    </div>
                    <div className="column">
                        <img className="ui wireframe image" src="https://a0.muscache.com/im/pictures/7bd0b8ea-34c8-4633-a7d4-9252107db617.jpg?aki_policy=large" alt="Item"/>
                        <div className="category">Food Tasting</div>
                        <div className="description">Miami Beach: Taste Your Way Through The Art Deco District</div>
                        <div className="price">$59 per person</div>
                    </div>
                    <div className="column">
                        <img className="ui wireframe image" src="https://a0.muscache.com/im/pictures/7bd0b8ea-34c8-4633-a7d4-9252107db617.jpg?aki_policy=large" alt="Item"/>
                        <div className="category">Food Tasting</div>
                        <div className="description">Miami Beach: Taste Your Way Through The Art Deco District</div>
                        <div className="price">$59 per person</div>
                    </div>
                    <div className="column">
                        <img className="ui wireframe image" src="https://a0.muscache.com/im/pictures/7bd0b8ea-34c8-4633-a7d4-9252107db617.jpg?aki_policy=large" alt="Item"/>
                        <div className="category">Food Tasting</div>
                        <div className="description">Miami Beach: Taste Your Way Through The Art Deco District</div>
                        <div className="price">$59 per person</div>
                    </div>
                    <div className="column">
                        <img className="ui wireframe image" src="https://a0.muscache.com/im/pictures/7bd0b8ea-34c8-4633-a7d4-9252107db617.jpg?aki_policy=large" alt="Item"/>
                        <div className="category">Food Tasting</div>
                        <div className="description">Miami Beach: Taste Your Way Through The Art Deco District</div>
                        <div className="price">$59 per person</div>
                    </div>
                </div>
            </div>
        )
    }
}