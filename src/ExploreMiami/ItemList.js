import React, {Component} from 'react'
import seedItems from './seed'
import Item from './Item'

export default class ItemList extends Component {
    state = {
        items: []
    }

    componentDidMount = () => {
        this.setState({
            items: seedItems
        })
    }

    render() {
        return (
            <div className='ui four column grid'>
                {this.state.items.map((item) =>
                    <Item
                        key={item.id}
                        item={item}
                    />
                )}
            </div>
        )
    }
}