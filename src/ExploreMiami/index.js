import React, {Component} from 'react'
import ItemList from './ItemList'
import dataList from './data.js'
import seedItems from './seed'
import './style.css'


export default class ExploreMiami extends Component {

    state = {
        dataList: [],
        sections: []
    }

    componentDidMount = () => {
        this.setState({
            dataList: dataList,
            sections: seedItems
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
                {this.state.sections.map((section) =>
                    <ItemList
                        key={section.id}
                        name={section.name}
                        items={section.items}
                    />
                )}
            </div>
        )
    }
}