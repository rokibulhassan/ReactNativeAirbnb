import React, {Component} from 'react'
import ItemList from './ItemList'
import seedItems from './seed'
import './style.css'


export default class ExploreMiami extends Component {

    state = {
        sections: []
    }

    componentDidMount = () => {
        this.setState({
            sections: seedItems,
        })
    }

    render() {
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