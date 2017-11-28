import React, {Component} from 'react'
import Filters from './Filters'
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

    filterDataByTag = (targetTag) => {
        console.log("click")

        dataList.forEach(function (sectionData) {
            sectionData.items = sectionData.items.filter(function (el) {
                return el.tag === targetTag;
            });
        });

        this.setState({
            dataList: dataList
        })
    }

    filterDataByCategory = (targetCategory) => {
        dataList.forEach(function (sectionData) {
            sectionData.items = sectionData.items.filter(function (el) {
                return el.categories.indexOf(targetCategory) > -1;
            });
        });

        this.setState({
            dataList: dataList
        })
    }

    render() {
        return (
            <div className="main ui container">
                <Filters/>
                {this.state.dataList.map((section) =>

                    <ItemList
                        key={section._id}
                        name={section.name}
                        items={section.items}
                        onTagSelected={this.filterDataByTag}
                    />
                )}
            </div>
        )
    }
}