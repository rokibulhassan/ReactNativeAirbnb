import React, {Component} from 'react'
import Filters from './Filters'
import ItemList from './ItemList'
import dataList from './data'
import categoryList from './categories-data'
import './style.css'


export default class ExploreMiami extends Component {

    state = {
        dataList: [],
        categoryList: []
    }

    componentDidMount = () => {
        this.setState({
            dataList: dataList,
            categoryList: categoryList
        })
    }

    filterDataByTag = (targetTag) => {
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
        console.log(targetCategory)

        dataList.forEach(function (sectionData) {
            sectionData.items = sectionData.items.filter(function (el) {
                return el.category.indexOf(targetCategory) > -1;
            });
        });

        this.setState({
            dataList: dataList
        })
    }

    manageFavourite = (item) => {
        let favouriteSection = dataList[dataList.length - 1];

        var index = favouriteSection.items.indexOf(item);
        if (index !== -1) {
            favouriteSection.items.splice(index, 1);
            item.isFavourite = false
        }
        else {
            favouriteSection.items.push(item);
            item.isFavourite = true
        }

        this.setState({
            dataList: dataList
        })
    }

    render() {
        return (
            <div className="main ui container">
                <div className="ui equal width grid filers">
                    <div className="row">
                        {this.state.categoryList.map((category) =>
                            <Filters
                                key={category.id}
                                category={category}
                                onFilterSelected={this.filterDataByCategory}
                            />
                        )}

                    </div>
                </div>

                {this.state.dataList.map((section) =>
                    <ItemList
                        key={section._id}
                        name={section.name}
                        items={section.items}
                        onTagSelected={this.filterDataByTag}
                        onImageSelected={this.manageFavourite}
                    />
                )}
            </div>
        )
    }
}