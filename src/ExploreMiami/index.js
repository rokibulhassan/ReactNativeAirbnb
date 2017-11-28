import React, {Component} from 'react'
import ItemList from './ItemList'
import dataList from './data.js'
import './style.css'


export default class ExploreMiami extends Component {

    state = {
        dataList: []
    }

    componentDidMount = () => {
        this.setState({
            dataList: dataList
        })
    }

    render() {
        function filterDataByTag(targetTag){
            dataList.forEach(function(sectionData) {
                sectionData.items = sectionData.items.filter(function (el) {
                    return el.tag === targetTag;
                  });
            });
        }

        function filterDataByCategory(targetCategory){
            dataList.forEach(function(sectionData) {
                sectionData.items = sectionData.items.filter(function (el) {
                    return el.category.indexOf(targetCategory) > -1;
                  });
            });
        }

        //filterDataByTag("CLUBBING")
        //filterDataByCategory("Experiences")

        console.log(dataList)

        return (
            <div className="main ui container">
                <h1 className="ui dividing header">Explore Miami</h1>
                <ItemList/>
            </div>
        )
    }
}