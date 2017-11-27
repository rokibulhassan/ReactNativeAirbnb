import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Product extends Component{

    static propTypes = {
        onVote: PropTypes.func.isRequired,
        product: PropTypes.object.isRequired
    }

    handleUpVote = () => (
        this.props.onVote(this.props.product.id)
    );

    render(){
        const { productImageUrl, votes, url, title, description, submitterAvatarUrl } = this.props.product
        return (
            <div className='item'>
                <div className='image'>
                    <img src={productImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon' />
                        </a>
                        {votes}
                    </div>
                    <div className='description'>
                        <a href={url}>
                            {title}
                        </a>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src={submitterAvatarUrl}
                        />
                    </div>
                </div>
            </div>
        )
    }
}