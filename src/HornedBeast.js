import React from "react";

class HornedBeast extends React.Component{
    render(){
        return(
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.image} alt={this.props.alt} title={this.props.titl}/>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeast;

//  <img src={this.props.image} /*alt={this.props.alt} tittle={this.props.tittle}*//>