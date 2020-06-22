import React, { Component } from 'react'

export default class Input extends Component {
    
    getClassCSS = () => {
        let cssClass = "Input InputElement"
        if (this.props.error.status && this.props.error.isTouched){
            cssClass += " Invalid"
        }
        return cssClass
    }
    
    
    render() {
        return (
        <>
            <input 
            onChange={this.props.onChangeInput} 
            value={this.props.value} 
            className={this.getClassCSS()}
            name= {this.props.name}
            placeholder={this.props.placeholder}
            type = {this.props.type}/>
            <p className="ErrorMessage">{this.props.error.message}</p>
        </>
        )
    }
}
