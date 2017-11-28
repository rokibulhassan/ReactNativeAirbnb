import React, {Component} from 'react'
import ItemList from './ItemList'
import './style.css'


export default class ExploreMiami extends Component {

    render() {
        return (
            <div className="main ui container">
                <h1 className="ui dividing header">Explore Miami</h1>
                <ItemList/>
            </div>
        )
    }
}