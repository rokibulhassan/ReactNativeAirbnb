import React, {Component} from 'react'
import Item from './Item'

export default class ItemList extends Component {

    render() {

        return (
            <div>
                <h1 className="ui dividing header">{this.props.name}</h1>
                <div className='ui four column grid'>
                    {this.props.items.map((item) =>
                        <Item
                            key={item.id}
                            item={item}
                        />
                    )}
                </div>
            </div>
        )
    }
}