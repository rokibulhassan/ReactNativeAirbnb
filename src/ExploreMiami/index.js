import React, {Component} from 'react'
import Filters from './Filters'
import ItemList from './ItemList'
import seedItems from './seed'
import './style.css'


export default class ExploreMiami extends Component {

    state = {
        sections: []
    }

    componentDidMount = () => {
        this.setState({
            sections: seedItems
        })
    }

    render() {
        function filterDataByTag(targetTag) {
            seedItems.forEach(function (sectionData) {
                sectionData.items = sectionData.items.filter(function (el) {
                    return el.tag === targetTag;
                });
            });
        }

        function filterDataByCategory(targetCategory) {
            seedItems.forEach(function (sectionData) {
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