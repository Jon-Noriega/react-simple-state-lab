import React, { Component } from 'react';


export default class Cell extends Component {
    
    state = {
        color: this.props.value
    }

    handleClick = () => {
        return this.setState({color: "#333"})
    }

    render() {
        return (
            <div onClick={ this.handleClick } className="cell" style={{backgroundColor: this.state.color}}>
                
            </div>
        )
    }
}
