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

    render() {
        function filterDataByTag(targetTag) {
            dataList.forEach(function (sectionData) {
                sectionData.items = sectionData.items.filter(function (el) {
                    return el.tag === targetTag;
                });
            });
        }

        function filterDataByCategory(targetCategory) {
            dataList.forEach(function (sectionData) {
                sectionData.items = sectionData.items.filter(function (el) {
                    return el.categories.indexOf(targetCategory) > -1;
                });
            });
        }

        //filterDataByTag("CLUBBING")
        //filterDataByCategory("Homes")

        //console.log(dataList)

        return (
            <div className="main ui container">
                <Filters/>
                {this.state.dataList.map((section) =>

                    <ItemList
                        key={section._id}
                        name={section.name}
                        items={section.items}
                    />
                )}
            </div>
        )
    }
}